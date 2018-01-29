/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  und = require('./templates/und.json'),
  // This file needs to be run each time a new language is added to the
  // database; This script requires an existing output file
  // use "npm run build" first!
  output = require('./out/v1/diacritics.json');

/**
 * This class uses a predefined list of diacritics (extracted from mark.js) and
 * compares it to the resulting diacritics.json used by the database;
 * diacritics that are not found in the database are then added to the "und"
 * (undetermined) language (named per https://goo.gl/W415r4) building on the
 * und.json template file.
 */
class Undetermined {
  /**
   * Constructor
   */
  constructor() {
    // This list was copied from https://git.io/vNPua
    this.diacritics = [
      'aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ',
      'cçćč', 'CÇĆČ',
      'dđď', 'DĐĎ',
      'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ',
      'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ',
      'lł', 'LŁ',
      'nñňń', 'NÑŇŃ',
      'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ',
      'rř', 'RŘ',
      'sšśșş', 'SŠŚȘŞ',
      'tťțţ', 'TŤȚŢ',
      'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ',
      'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ',
      'zžżź', 'ZŽŻŹ'
    ];
    this.run();
  }

  /**
   * Search for the diacritic within the validated database
   * @param {string} char - diacritic character to find within the existing
   * diacritics.json database.
   * @return {boolean} - returns true if found; otherwise false
   */
  findChar(char) {
    return Object.keys(output).find(lang => {
      return lang === 'und' ?
        false :
        Object.keys(output[lang]).find(variant =>
          Object.keys(output[lang][variant].data).includes(char)
        );
    });
  }

  /**
  * Writes the defined content into ./src/[lang]/[lang].json
  * @param {string} block - a block of diacritic characters using
  * a format where the base character is first, followed by a list
  * of diacritics characters that match the base, e.g. 'cçćč' where
  * 'c' is the base character and 'çćč' are the matching diacritics
  * results are added directly to the global `und` template
  */
  buildEntries(block) {
    block = block.split('');
    const base = block.shift(),
      capital = base.toLowerCase() !== base;
    block.forEach(diacritic => {
      if (!this.findChar(diacritic)) {
        und.data[diacritic] = {
          capital,
          mapping: {
            base
          }
        };
      }
    });
  }

  /**
   * Write resulting "und.json" file using the global "und" variable
   */
  writeFile() {
    fs.writeFile(
      './src/und/und.json',
      JSON.stringify(und, null, ' ') + '\n',
      err => {
        if (err) {
          console.log('Error writing und.json', err);
        }
      }
    );
  }

  /**
   * Runs the build
   */
  run() {
    this.diacritics.forEach(block => this.buildEntries(block));
    this.writeFile();
  }
}

// run the undetermined build
new Undetermined();
