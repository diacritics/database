/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
"use strict";
const fs = require("fs"), // file system
    glob = require("glob"), // match files using patterns
    del = require("del"), // delete files using patterns
    stripJsonComments = require("strip-json-comments"), // remove JSON comments
    Ajv = require("ajv"), // json schema validation
    // official language references
    officialLang = require("cldr-data/supplemental/languageData"),
    territoryInfo = require("cldr-data/supplemental/territoryInfo");

/**
 * Build
 */
class Build {

    /**
     * Constructor
     */
    constructor() {
        this.run();
    }

    /**
     * Language file schema
     * @type {object}
     */
    get languageFileSchema() {
        if(!this._languageFileSchema) {
            this._languageFileSchema = this.readJSON("./build/schema.js");
        }
        return this._languageFileSchema;
    }

    /**
     * HTML entities
     * @type {object}
     */
    get htmlEntities() {
        if(!this._htmlEntities) {
            this._htmlEntities = this.readJSON("./build/html-entities.js");
        }
        return this._htmlEntities;
    }

    /**
     * Package information
     * @type {object}
     */
    get pkg() {
        if(!this._pkg) {
            this._pkg = this.readJSON("./package.json");
        }
        return this._pkg;
    }

    /**
     * Reads a JSON file, removes comments and parses it
     * @return {object}
     */
    readJSON(file) {
        return JSON.parse(
            stripJsonComments(
                fs.readFileSync(file, "utf8")
            )
        );
    }

    /**
     * Removes all files of the build output folder
     */
    clearBuild() {
        del.sync(["./build/out/**"]);
    }

    /**
     * Returns an array of all language files
     * @return {object[]}
     */
    getLanguageFiles() {
        let ret = [];
        glob.sync("./src/**/*.js").forEach(file => {
            const spl = file.split("/"),
                folderName = spl[2],
                fileName = spl[3].split(".")[0];
            ret.push({
                file,
                folderName,
                fileName
            });
        });
        return ret;
    }

    /**
     * Validates JSON syntax
     * @param {string} file - Path to the JSON file
     * @return {boolean}
     */
    validateJSONSyntax(file) {
        try {
            this.readJSON(file);
            return true;
        } catch(error) {
            return false;
        }
    }

    /**
     * Validates JSON schema
     * @param {string} file - Path to the JSON file
     * @return {string} - Either an empty string or the error message
     */
    validateJSONSchema(file) {
        const validator = new Ajv(),
            validate = validator.compile(this.languageFileSchema);
        if(!validate(this.readJSON(file))) {
            return JSON.stringify(validate.errors, null, 4);
        } else {
            return "";
        }
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
        const prefix = options.prefix || "",
            suffix = options.suffix || "",
            len = str.length,
            format = function (val) {
                if(options.base === "dec") {
                    // if no prefix/suffix, this returns a number type
                    return(prefix || suffix) ? prefix + val + suffix : val;
                }
                // return ignore leading zero if hex <= FFFF
                let size = val < 0x10000 ? -4 : -5;
                return prefix +
                    ("00000" + val.toString(16))
                    .toUpperCase()
                    .slice(size) + suffix;
            };
        let chr, low,
            result = [],
            indx = 0;
        while(indx < len) {
            chr = str.charCodeAt(indx++);
            if(chr < 0x007F) {
                // plain character
                result.push(str.charAt(indx - 1));
            } else if(chr >= 0xD800 && chr <= 0xDBFF) {
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
        return options.output === "array" ? result : result.join("");
    }

    /**
     * Generate equivalents data block
     * @param {string} char
     * @return {object}
     */
    generateEquivalentsData(char) {
        let ret = {
            "raw": char,
            "unicode": this.decodeUnicode(char, {
                prefix: "\\u"
            }),
            "html_decimal": this.decodeUnicode(char, {
                prefix: "&#",
                suffix: ";",
                base: "dec"
            }),
            "html_hex": this.decodeUnicode(char, {
                prefix: "&#x",
                suffix: ";"
            }),
            "encoded_uri": encodeURI(char)
        };
        if(this.htmlEntities[char]) {
            ret["html_entity"] = this.htmlEntities[char];
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
                char.normalize("NFD"),
                char.normalize("NFC"),
                char.normalize("NFKD"),
                char.normalize("NFKC")
            ];
        // only keep the unique values
        normalized = normalized.filter((char, indx, self) => {
            let val = this.decodeUnicode(char, {
                prefix: "\\u"
            });
            return ret[0]["unicode"] !== val && self.indexOf(char) === indx;
        });
        if(normalized.length) {
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
                Object.keys(json[lang][variant]["data"]).forEach(char => {
                    const eq = this.generateEquivalents(char);
                    clone[lang][variant]["data"][char]["equivalents"] = eq;
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
        const languages = officialLang.supplemental.languageData,
            territories = territoryInfo.supplemental.territoryInfo;
        Object.keys(json).forEach(lang => {
            Object.keys(json[lang]).forEach(variant => {
                const meta = clone[lang][variant].metadata;
                let official = [];
                // languageData contains ALL territories where a language is
                // spoken, so we will cross-reference with the territoryInfo
                // to only find offical languages
                if(languages[variant]["_territories"]) {
                    languages[variant]["_territories"].forEach(trty => {
                        const vrnt =
                            territories[trty].languagePopulation[variant];
                        // official or official_regional language if defined
                        if(vrnt["_officialStatus"]) {
                            official.push(trty);
                        }
                    });
                }
                meta.official = official;
            });
        });
        return clone;
    }

    /**
     * Writes the defined content into ./build/out/[version]/diacritics.json
     * @param {string} content - The file content
     */
    writeOutput(content) {
        // write diacritics.json based on `out`
        fs.mkdirSync("./build/out/");
        fs.mkdirSync(`./build/out/v${this.pkg.version.split(".")[0]}`);
        fs.writeFileSync(
            `./build/out/v${this.pkg.version.split(".")[0]}/diacritics.json`,
            JSON.stringify(content, null, 4),
            "utf8"
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

            if(!this.validateJSONSyntax(file)) {
                throw new Error(`Syntax error in file: '${file}'`);
            }
            let schemaValidation = this.validateJSONSchema(file);
            if(schemaValidation.length > 0) {
                throw new Error(
                    `Schema error in file '${file}': ${schemaValidation}`
                );
            }

            // add language & any variants
            if(typeof out[folderName] === "undefined") {
                out[folderName] = {};
            }
            out[folderName][fileName] = this.readJSON(file);
            out = this.addEquivalents(out);
            out = this.addOfficialLang(out);
        });
        this.writeOutput(out);
    }

}

// run the build
new Build();
