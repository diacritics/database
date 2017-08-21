/*!***************************************************
 * diacritics - extract characters
 * http://diacritics.io/
 * Copyright (c) 2016-2017, Diacritics Team
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
"use strict";
const fs = require("fs"), // file system
    path = require("path"),
    // delete files using patterns
    del = require("del"),
    // remove combining diacritics
    stripMarks = require("strip-combining-marks"),

    // get metadata.alphabet
    alphabet = require("cldr-data/supplemental/languageData")
        .supplemental.languageData,
    // get metadata.language in English
    langEn = require("cldr-data/main/en/languages")
        .main.en.localeDisplayNames.languages,

    // CLDR data path
    cldrData = "node_modules/cldr-data/",
    // message added to beginning of generated files
    unvalidatedMessage = `/**
 * This file was automatically generated and contains unvalidated content
 * Once verified, add the base IETF language tag to the array in the
 * build/validated-languages.json file and remove this comment
 */
`;

/**
 * Extract
 */
class Extract {
    /**
     * Constructor
     */
    constructor() {
        this.run();
    }

    /**
     * Extract language root from language string
     * e.g. "de-AT" language root is "de"
     * @param {string} language - IETF language tag
     * @return {string} - root language
     */
    getRootLang(language) {
        return language.split("-")[0];
    }

    /**
     * Reads a JSON file, removes comments and parses it
     * @param {string} file - path to JSON file
     * @return {object}
     */
    readJSON(file) {
        return JSON.parse(fs.readFileSync(file, "utf8"));
    }

    /**
     * Load a specific language JSON file
     * @param {string} lang - IETF language tag
     */
    loadLangFiles(lang) {
        if (!this._langData[lang]) {
            const path = `${cldrData}main/${lang}/`;
            // get language alphabet to extract diacritics
            let data = this.readJSON(path + "characters.json");
            this._langData[lang] = data || {};
            // get metadata.native value
            data = this.readJSON(path + "languages.json");
            this._langNative[lang] =
                data.main[lang].localeDisplayNames.languages[lang] || {};
        }
    }

    /**
     * Build a list of languages from CLDR directory folder structure
     * @return {array}
     */
    buildLangList() {
        const folders = [],
            dir = cldrData + "main";
        fs.readdirSync(dir).filter(file => {
            if (fs.lstatSync(path.join(dir, file)).isDirectory()) {
                folders.push(file);
            }
        });
        return folders;
    }

    /**
     * Extract alphabet
     * @param {object} data - language data object
     * @return {array} - array of characters to check (a-z and A-Z removed)
     */
    extractAlphabet(data) {
        // e.g. lang "AF" exemplarCharacters returns (lower case only):
        // "[a á â b c d e é è ê ë f g h ... ô ö p q r s t u û v w x y z]"
        let alphabet = data.characters.exemplarCharacters,
            result = alphabet
            .substring(1, alphabet.length - 1)
            .replace(/[a-zA-Z]/g, "")
            .trim();
        // include upper and lower case characters
        return (
            `${result.toLocaleLowerCase()} ${result.toLocaleUpperCase()}`
        ).split(/\s+/);
    }

    /**
     * Convert an array of territories into an array of continents
     * @param {string} rootLang - IETF language tag
     * @return {array} - array of continents
     */
    getContinents(rootLang) {
        let continents = [],
            key = "_territories",
            contList = Object.keys(this._continents),
            alt = alphabet[rootLang + "-alt-secondary"],
            territories =
                (alphabet[rootLang] && alphabet[rootLang][key] || [])
                .concat(alt && alt[key] || []);
        if (territories.length) {
            territories.forEach(territory => {
                contList.forEach(continent => {
                    if (
                        !continents.includes(continent) &&
                        this._continents[continent].includes(territory)
                    ) {
                        continents.push(continent);
                    }
                });
            });
        }
        return continents;
    }

    getMetadata(language) {
        // get root language (ignore variants for alphabet data)
        const rootLang = this.getRootLang(language),
            alpha = alphabet[rootLang] || {},
            continents = this.getContinents(rootLang);
        return {
            metadata: {
                alphabet: alpha["_scripts"] && alpha["_scripts"][0] || "",
                continent: continents,
                language: langEn[rootLang] || "",
                native: this._langNative[rootLang],
                source: [
                    "http://www.unicode.org/cldr/charts/latest/by_type/" +
                    "core_data.alphabetic_information.main.html"
                ]
            },
            data: {}
        };
    }

    /**
     * Extract diacritics from alphabet string
     * @param {string} language - IETF Language tag
     * @param {object} file - Language JSON data
     */
    makeLangFile(language) {
        if (this._langData[language]) {
            const alphabet = this._langData[language].main[language],
                lang = this.getMetadata(language);
            let chars = this.extractAlphabet(alphabet);
            if (chars.length) {
                chars.forEach(char => {
                    // some languages (e.g. "BS") include character clusters
                    // "[a b c č ć d {dž} ... {lj} m n {nj} ... š t u v z ž]"
                    if (char && !/^{.+}$/.test(char)) {
                        // convert character into base letter + combining
                        // diacritic then remove any combining diacritics
                        let base = stripMarks(char.normalize("NFD"));
                        if (base !== char && base !== "") {
                            lang.data[char] = {
                                mapping: {
                                    base: base
                                }
                            };
                        }
                    }
                });
                this._results[language] = lang;
            }
        }
    }

    /**
     * Validate language results
     * - remove variants that exactly match the root
     * - write language file to "src" directory
     */
    validateList() {
        const languages = Object.keys(this._results);
        // assuming the first language listed isn't a variant
        let root = JSON.stringify(this._results[languages[0]]);
        languages.forEach(language => {
            let unique = true,
                isVariant = /-/.test(language) &&
                // make exception for "sr-Latn"
                !/^sr-Latn$/.test(language);
            const data = this._results[language];
            if (!isVariant) {
                root = JSON.stringify(data);
            }
            // skip validated languages
            if (!this._validLangs.includes(language) ||
                isVariant &&
                !this._validLangs.includes(this.getRootLang(language))
            ) {
                // target language variants
                if (isVariant) {
                    // include variants that are different from the root
                    // language
                    if (JSON.stringify(data) === root) {
                        unique = false;
                    }
                }
                // write file if unique and it contains data
                if (unique && Object.keys(data.data).length) {
                    this.writeOutput(language, data);
                }
            }
        });
    }

    /**
     * Writes the defined content into ./src/[lang]/[lang].json
     * @param {string} language - IETF Language tag
     * @param {object} data - Language JSON data to output 
     */
    writeOutput(language, data) {
        let indx, temp,
            folder = language;
        if (/-/.test(language)) {
            // per spec... de/ would contain de.js, at.js & ch.js
            indx = language.indexOf("-");
            folder = language.substring(0, indx);
            // make exception for "sr-Latn"
            language = /^sr-Latn$/.test(language) ?
                folder :
                language.slice(indx + 1);
        }
        temp = `./src/${folder}/`;
        if (!fs.existsSync(temp)) {
            fs.mkdirSync(temp);
        }
        temp = `./src/${folder}/${language}.js`;
        if (!fs.existsSync(temp)) {
            fs.writeFileSync(
                temp,
                unvalidatedMessage + JSON.stringify(data, null, 4) + "\n",
                "utf8"
            );
        } else {
            console.log(`ERROR: ${language} file already exists`);
        }
    }

    /**
     * Removes all auto-generated files in the src folder
     */
    clearBuild() {
        const dir = "./src/";
        fs.readdirSync(dir).filter(file => {
            // ignore variants
            let variant = this.getRootLang(file);
            if (
                fs.lstatSync(path.join(dir, file)).isDirectory() &&
                !this._validLangs.includes(variant)
            ) {
                del.sync([dir + file + "/**"]);
            }
        });
    }

    /**
     * load in extract settings
     */
    loadSettings() {
        // get metadata.continents cross-reference
        this.loadTSV();
        // load list of validated languages
        this._validLangs = this.readJSON("./build/validated-languages.json");
        
    }

    /**
     * Load continents.tsv cross-reference copied directly from wikipedia
     * https://goo.gl/qt0S54
     */
    loadTSV() {
        const data = fs.readFileSync("./build/continents.tsv", 'utf8');
        this._continents = {
            "AF": [],
            "AS": [],
            "EU": [],
            "NA": [],
            "SA": [],
            "OC": [],
            "AN": []
        };
        data.split("\n").forEach(continent => {
            let line = continent.split("\t");
            // skip CR at file end
            if (line[1]) {
                // Add country to continent list
                this._continents[line[0]].push(line[1]);
            }
        });
    }

    /**
     * Runs the build
     */
    run() {
        this._results = {};
        this._langData = {};
        this._langNative = {};
        this.loadSettings();
        this.clearBuild();
        this.buildLangList().forEach(language => {
            this.loadLangFiles(language);
            this.makeLangFile(language);
        });
        this.validateList();
    }
}

// run the build
new Extract();
