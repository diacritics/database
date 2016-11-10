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
    hjson = require("hjson"), // parse json with comments
    pkg = JSON.parse(fs.readFileSync("./package.json")); // package config

// clear build folder
del.sync(["./build/**"]);

// concatenate all language files
let out = {},
    files = glob.sync("./src/**/*.js");
files.forEach(file => {
    const spl = file.split("/"),
        folderName = spl[2],
        fileName = spl[3].split(".")[0],
        ctn = fs.readFileSync(file, "utf8"),
        json = hjson.parse(ctn);
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
fs.mkdirSync("./build/");
fs.writeFileSync(
    "./build/diacritics.json",
    JSON.stringify(out, null, 4),
    "utf8"
);
