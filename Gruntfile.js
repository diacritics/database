/*!***************************************************
 * diacritics
 * https://github.com/julmot/diacritics
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/viqmF
 *****************************************************/
/* global module, require */
/* jshint esnext:true, unused:true */
module.exports = grunt => {
"use strict";

    // load grunt tasks
    require("jit-grunt")(grunt);

    const pkg = grunt.file.readJSON("package.json");

    // grunt configuration
    grunt.initConfig({
        clean: {
            dist: ["dist/*.json"]
        },
        stripJsonComments: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js"],
                    dest: "dist/",
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
    grunt.registerTask("default", ["clean", "stripJsonComments", "combine"]);

    function preserveUnicode(obj, options) {
        // code from http://stackoverflow.com/a/4901205/145346
        return JSON.stringify(obj, options).replace(/[\u007f-\uffff]/g, function(c) {
            return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
        });
    }

    /**
     * Combine all source files into a main file
     */
    grunt.registerTask("combine", function() {
        let indx, lang;
        const project = {},
            distFiles = grunt.file.expand({filter: "isFile"}, ["dist/*.json"]),
            len = distFiles.length;
        for (indx = 0; indx < len; indx++) {
            lang = distFiles[indx].replace(/(dist\/|\.json)/g, "");
            project[lang] = grunt.file.readJSON(distFiles[indx]);
            // compress JSON file
            grunt.file.write(distFiles[indx], preserveUnicode(project[lang]));
        }
        grunt.file.write(pkg.main, preserveUnicode(project)); //, null, 4)); // <- format main file?
    });
};
