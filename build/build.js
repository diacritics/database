/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  glob = require('glob'),
  del = require('del'),
  Utils = require('./processes/utils'),
  Validate = require('./processes/validate'),
  pkg = require('../package.json'),
  validated = require('../src/validated-languages.json'),
  // official language references
  languageData = require('cldr-data/supplemental/languageData'),
  territoryInfo = require('cldr-data/supplemental/territoryInfo');

/**
 * The build generates all src/*.json files into one .json file within
 * build/out/. Only validated languages will be handled.
 */
class Build {

  /**
   * Constructor
   */
  constructor() {
    this._diacritics = new Set([]);
    this.run();
  }

  /**
   * Removes all files of the build output folder
   */
  clearBuild() {
    del.sync(['./build/out/**']);
  }

  /**
   * Returns an array of all language files. Only those that are included in the
   * validated-languages.json will be returned.
   * @return {object[]}
   */
  getLanguageFiles() {
    let ret = [];
    glob.sync('./src/*/*.json').forEach(file => {
      const spl = file.split('/'),
        folderName = spl[2],
        fileName = spl[3].split('.')[0];
      if (validated.includes(folderName)) {
        ret.push({
          file,
          folderName,
          fileName
        });
      }
    });
    return ret;
  }

  /**
   * @typedef Build~decodeUnicode
   * @type {object.<string>}
   * @property {string} prefix - converted character prefix (unicode "\\u",
   * HTML "&#" or "&#x")
   * @property {string} suffix - converted character suffix (HTML ";")
   * @property {string} base - "hex" (default) or "dec" (base 10, decimal)
   * conversion
   * @property {string} output - combined string (default); set to "array"
   * for an array of values
   */
  /**
   * Convert unicode character(s) into UTF-16 or -32 equivalents.
   * Modified from http://tinyurl.com/zj7sd5h
   * @param {str} str - The string to convert
   * @param {Build~decodeUnicode} options
   * @return {string|string[]}
   */
  decodeUnicode(str, options = {}) {
    const prefix = options.prefix || '',
      suffix = options.suffix || '',
      len = str.length,
      format = val => {
        if (options.base === 'dec') {
          // if no prefix/suffix, this returns a number type
          return (prefix || suffix) ? prefix + val + suffix : val;
        }
        // return ignore leading zero if hex <= FFFF
        let size = val < 0x10000 ? -4 : -5;
        return prefix + ('00000' + val.toString(16))
          .toUpperCase()
          .slice(size) + suffix;
      };
    let chr, low,
      result = [],
      indx = 0;
    while (indx < len) {
      chr = str.charCodeAt(indx++);
      if (chr < 0x007F) {
        // plain character
        result.push(str.charAt(indx - 1));
      } else if (chr >= 0xD800 && chr <= 0xDBFF) {
        // surrogate pair
        low = str.charCodeAt(indx++);
        result.push(
          format(0x10000 + ((chr - 0xD800) << 10) | (low - 0xDC00))
        );
      } else {
        // Basic Multilingual Plane (BMP) character
        result.push(format(chr));
      }
    }
    return options.output === 'array' ? result : result.join('');
  }

  /**
   * Generate equivalents data block
   * @param {string} char
   * @return {object}
   */
  generateEquivalentsData(char) {
    let ret = {
      'raw': char,
      'unicode': this.decodeUnicode(char, {
        prefix: '\\u'
      }),
      'htmlDecimal': this.decodeUnicode(char, {
        prefix: '&#',
        suffix: ';',
        base: 'dec'
      }),
      'htmlHex': this.decodeUnicode(char, {
        prefix: '&#x',
        suffix: ';'
      }),
      'encodedUri': encodeURI(char)
    };
    const entities = Utils.readJSON('./build/data/html-entities.json');
    if (entities[char]) {
      ret['htmlEntity'] = entities[char];
    }
    return ret;
  }

  /**
   * Generates equivalents of the defined character
   * @param {string} char
   * @return {string[]}
   */
  generateEquivalents(char) {
    let ret = [this.generateEquivalentsData(char)],
      // normalization time! http://unicode.org/reports/tr15/#Norm_Forms
      // we're going to decompose & recompose in every way
      // e.g. U+00e4 (ä) into a + U+0308 (a + diaeresis)
      normalized = [
        char.normalize('NFD'),
        char.normalize('NFC'),
        char.normalize('NFKD'),
        char.normalize('NFKC')
      ];
    // only keep the unique values
    normalized = normalized.filter((char, indx, self) => {
      let val = this.decodeUnicode(char, {
        prefix: '\\u'
      });
      return ret[0]['unicode'] !== val && self.indexOf(char) === indx;
    });
    if (normalized.length) {
      normalized.forEach(char => {
        ret.push(this.generateEquivalentsData(char));
      });
    }
    return ret;
  }

  /**
   * Iterates over the mapping characters and adds equivalents using
   * <code>generateEquivalents</code>
   * @param {object} json - The JSON object
   * @return {object}
   */
  addEquivalents(json) {
    let clone = JSON.parse(JSON.stringify(json));
    Object.keys(json).forEach(lang => {
      Object.keys(json[lang]).forEach(variant => {
        Object.keys(json[lang][variant]['data']).forEach(char => {
          const eq = this.generateEquivalents(char);
          clone[lang][variant]['data'][char]['equivalents'] = eq;
          if (lang !== 'und') {
            this._diacritics.add(char);
          }
        });
      });
    });
    return clone;
  }

  /**
   * Iterates over all languages in the database and adds a list of countries
   * where the given language is the or an official language
   * @param {object} json - The JSON object
   * @return {object}
   */
  addOfficialLang(json) {
    let clone = JSON.parse(JSON.stringify(json));
    const languages = languageData.supplemental.languageData,
      territories = territoryInfo.supplemental.territoryInfo;
    Object.keys(json).forEach(lang => {
      Object.keys(json[lang]).forEach(variant => {
        const meta = clone[lang][variant].metadata;
        let country = [];
        // languageData contains ALL territories where a language is
        // spoken, so we will cross-reference with the territoryInfo
        // to only find offical languages
        if (languages[variant] && languages[variant]['_territories']) {
          languages[variant]['_territories'].forEach(territory => {
            const vrnt = territories[territory].languagePopulation[variant];
            // official or official_regional language if defined
            if (vrnt['_officialStatus']) {
              country.push(territory);
            }
          });
        }
        meta.country = country;
      });
    });
    return clone;
  }

  /**
   * Check validation
   * @param {string} file - path to JSON file + file name
   *
   */
  checkValidation(file) {
    const validation = new Validate(file);
    if (!validation.validateJSONSyntax()) {
      throw new Error(`Syntax error in file: '${file}'`);
    }
    let schemaValidation = validation.validateJSONSchema();
    if (schemaValidation.length > 0) {
      throw new Error(
        `Schema error in file '${file}': ${schemaValidation}`
      );
    }
  }

  /**
   * Remove existing diacritics from undetermined list
   * @param {object} content - The database file content
   * @return {object}
   */
  removeUndeterminedDuplicates(content) {
    [...this._diacritics].forEach(char => {
      if (content.und.und.data[char]) {
        delete content.und.und.data[char];
      }
    });
    return content;
  }

  /**
   * Writes the defined content into ./build/out/[version]/diacritics.json
   * @param {object} content - The database file content
   */
  writeOutput(content) {
    // write diacritics.json based on `out`
    fs.mkdirSync('./build/out/');
    fs.mkdirSync(`./build/out/v${pkg.version.split('.')[0]}`);
    Utils.writeJSON(
      `./build/out/v${pkg.version.split('.')[0]}/`,
      'diacritics',
      content
    );
  }

  /**
   * Runs the build
   */
  run() {
    this.clearBuild();
    let out = {};
    this.getLanguageFiles().forEach(item => {
      const {
        file,
        folderName,
        fileName
      } = item;
      this.checkValidation(file);
      // add language & any variants
      if (typeof out[folderName] === 'undefined') {
        out[folderName] = {};
      }
      out[folderName][fileName] = Utils.readJSON(file);
      out = this.addEquivalents(out);
      out = this.addOfficialLang(out);
    });
    out = this.removeUndeterminedDuplicates(out);
    this.writeOutput(out);
  }

}

// run the build
new Build();
