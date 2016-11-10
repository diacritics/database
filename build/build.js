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
    schema = JSON.parse(fs.readFileSync("./build/schema.json", "utf8")),
    pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

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
    const validator = new Ajv(),
        validate = validator.compile(schema);
    if(!validate(json)) {
        throw new Error(
            `Schema error in file '${file}': ${
                JSON.stringify(validate.errors, null, 4)
            }`
        );
    }

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
fs.mkdirSync(`./build/out/v${pkg.version.split(".")[0]}`);
fs.writeFileSync(
    `./build/out/v${pkg.version.split(".")[0]}/diacritics.json`,
    JSON.stringify(out, null, 4),
    "utf8"
);
