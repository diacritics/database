/*!***************************************************
 * diacritics
 * https://github.com/diacritics/diacritics
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/viqmF
 *****************************************************/
/* global module, require */
/* jshint esnext:true, unused:true, bitwise:false */
module.exports = grunt => {
"use strict";

    // load grunt tasks
    require("jit-grunt")(grunt);

    const pkg = grunt.file.readJSON("package.json");

    // grunt configuration
    grunt.initConfig({
        clean: {
            dist: ["dist/*.json", "dist/**/*.json"],
            build: ["build/"],
        },
        stripJsonComments: {
            build: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js"],
                    dest: "build/",
                    ext: ".json",
                    extDot: "first"
                }]
            },
            entities: {
                files: [{
                    expand: true,
                    cwd: "resources/",
                    src: ["html-entities.js"],
                    dest: "build/",
                    ext: ".json",
                    extDot: "first"
                }]
            }
        },
        watch: {
            dist: {
                files: ["src/**"]
            }
        }
    });

    /**
     * Generate dist files
     */
    grunt.registerTask("default", [
        "clean:dist",
        "stripJsonComments",
        "makeLangFiles",
        "clean:build"
    ]);

    /**
     * Convert unicode character(s) into UTF-16 or -32 equivalents
     * modified from http://stackoverflow.com/a/14681146/145346
     * Options:
     *   prefix: converted character prefix (unicode: "\\u", HTML: "&#" or "&#x")
     *   suffix: converted character suffix (HTML: ";")
     *   base:   "hex" (default) or "dec" (base 10, decimal) conversion
     *   output: combined string (default); set to "array" for an array of values
     */
    function decodeUnicode(str, options) {
        options = options || {};
        let chr, low,
            result = [],
            prefix = options.prefix || "",
            suffix = options.suffix || "",
            indx = 0;
        const len = str.length,
            format = function(val) {
                if (options.base === "dec") {
                    // if no prefix/suffix, this returns a number type
                    return (prefix || suffix) ? prefix + val + suffix : val;
                }
                // return ignore leading zero if hex <= FFFF
                let size = val < 0x10000 ? -4 : -5;
                return prefix +
                    ("00000" + val.toString(16)).toUpperCase().slice(size) + suffix;
            };
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
        return options.output === "array" ? result : result.join("");
    }

    /**
     * Preserve unicode within JSON files, otherwise they are converted into
     * the actual unicode character by JSON.stringify
     */
    function preserveUnicode(obj, output) {
        // code from http://stackoverflow.com/a/4901205/145346
        return JSON.stringify(obj, null, output)
            .replace(/[\u007f-\uffff]/g, function(c) {
                return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
            })
            // convert \\u#### in the equivalents data to \u####
            .replace(/\\\\/g, "\\");
    }

    /**
     * Build equivalents data using some external data ("html-entities"),
     * unicode conversion and normalization functions.
     */
    function makeEquivalents(settings) {
        const entities = grunt.file.readJSON("build/html-entities.json"),
            // String of all characters (whitespace separated) to process
            list = settings.current.split(/\s+/),
            unicodeFormat = {},
            equivalents = {},
            len = list.length;

        let indx, char,
            normalized = [];
        // set up unicode formatting
        char = settings["unicode-format"].split("{value}");
        unicodeFormat.prefix = char[0] || "";
        unicodeFormat.suffix = char[1] || "";

        // build equivalents JSON
        for (indx = 0; indx < len; indx++) {
            char = list[indx];
            if (!/^[\u0000-\u007f]$/.test(char)) {
                // start building equivalents
                equivalents[char] = [
                    // add unicode value (UTF-32)
                    decodeUnicode(char, unicodeFormat),
                    // add HTML decimal code
                    decodeUnicode(char, {prefix: "&#", suffix: ";", base: "dec"}),
                    // add HTML hex code
                    decodeUnicode(char, {prefix: "&#x", suffix: ";"}),
                    // add URI equivalent
                    encodeURI(char)
                ];
                // Add HTML common entity code if it exists
                if (entities[char]) {
                  equivalents[char].push(entities[char]);
                }
                // normalization time! See http://unicode.org/reports/tr15/#Norm_Forms
                // we're going to decompose & recompose in every way
                // e.g. U+00e4 (ä) into a + U+0308 (a + diaeresis)
                normalized = [
                    decodeUnicode(char.normalize("NFD"),  unicodeFormat),
                    decodeUnicode(char.normalize("NFC"),  unicodeFormat),
                    decodeUnicode(char.normalize("NFKD"), unicodeFormat),
                    decodeUnicode(char.normalize("NFKC"), unicodeFormat)
                ];
                // only keep the unique values
                normalized = normalized.filter((val, indx, self) =>
                  val !== equivalents[char][0] && self.indexOf(val) === indx
                );
                if (normalized.length) {
                    equivalents[char] = equivalents[char].concat(normalized);
                }
            }
        }
        return equivalents;
    }

    /**
     * Add equivalents data to the comment stripped language files in the build
     * folder and save them to the dist folder.
     */
    function buildDist(equivalents, output) {
        let indx, langCode, langData;
        const project = {},
            files = grunt.file.expand({
                filter: "isFile",
                cwd: "build/",
            }, [
                "**/*",
                "!settings.json",
                "!html-entities.json",
                "!equivalents.json"
            ]),
            len = files.length;

        for (indx = 0; indx < len; indx++) {
            // "de/de.json" => langCode = "de"
            langCode = files[indx].slice(0, files[indx].indexOf("/"));
            langData = grunt.file.readJSON("build/" + files[indx]);
            if (langData) {
                Object.keys(langData.data).forEach(val => {
                    if (!langData.data[val].equivalents) {
                        langData.data[val].equivalents = equivalents[val];
                    }
                });
                project[langCode] = langData;
                // compress JSON file
                grunt.file.write("dist/" + files[indx], preserveUnicode(langData, output));
            } else {
                grunt.log.error(`Unable to read ${files[indx]}`);
            }
        }
        grunt.file.write(pkg.main, preserveUnicode(project, output));
    }

    /**
     *
     */
    grunt.registerTask("makeLangFiles", () => {
        const settings = grunt.file.readJSON("build/settings.json"),
            equivalents = makeEquivalents(settings);
        // Create equivalents file (for testing)
        // grunt.file.write("build/equivalents.json", JSON.stringify(equivalents, null, 4));
        buildDist(equivalents, settings["output-format"]);
    });
};
