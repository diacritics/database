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
    validate = require("ajv"); // validate json files

// clear build folder
del.sync(["./build/out/**"]);

// concatenate all language files
let out = {},
    files = glob.sync("./src/**/*.js");
files.forEach(file => {
    const spl = file.split("/"),
        folderName = spl[2],
        fileName = spl[3].split(".")[0],
        ctn = fs.readFileSync(file, "utf8");

    // syntax validation
    let json;
    try {
        json = JSON.parse(stripJsonComments(ctn));
    } catch(error) {
        throw new Error(`Syntax error in file: '${file}'`);
    }

    // schema validation
    // TBD

    // concat json with `out`
    if(folderName === fileName) { // no language variant
        out[fileName] = json;
    } else {
        if(typeof out[folderName] === "undefined") {
            out[folderName] = {};
        }
        out[folderName][fileName] = json;
    }
});

// write diacritics.json based on `out`
fs.mkdirSync("./build/out/");
fs.writeFileSync(
    "./build/out/diacritics.json",
    JSON.stringify(out, null, 4),
    "utf8"
);
