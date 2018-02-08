/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  und = require('../../src/und/und.json'),
  Utils = require('./utils');

class Cleanup {
  /**
   * @param {object} template - The "und" language template
   */
  constructor(template = und) {
    /**
     * The build file where the actual diacritics for the "und" language are
     * originally stored
     * @type {string}
     */
    this.buildFile = './build/build-undetermined.js';
    /**
     * The build file contents where the actual diacritics for the "und"
     * language are originally stored
     * @type {object}
     */
    this.buildContent = fs.readFileSync(this.buildFile, 'utf8');
    /**
     * Contains the "und" language file template
     * @type {object}
     */
    this.und = {...template};
  }

  /**
   * Remove existing diacritics from undetermined list; called by build.js
   * @param {object} output - The database file content
   * @param {object} charList - A Set object containing all diacritics from the
   * database
   * @return {object}
   */
  removeUndeterminedDuplicates(output, charList) {
    [...charList].forEach(char => {
      if (output.und.und.data[char]) {
        delete output.und.und.data[char];
        delete this.und.data[char];
        this.buildContent = this.buildContent.replace(char, '');
        console.log(`Removed "${char}" from "und" language & build file`);
      }
    });
    this.saveFiles();
    return output;
  }

  /**
   * Save modified "build-undetermined.js" and "und/und.json" files
   */
  saveFiles() {
    fs.writeFile(this.buildFile, this.buildContent, 'utf8', err => {
      if (err) {
        throw err;
      }
      console.log(`"${this.buildFile}" updated`);
    });
    fs.unlinkSync('src/und/und.json');
    Utils.writeJSON('src/und', 'und', und);
    console.log('"und.json" file updated');
  }

}

module.exports = new Cleanup();
