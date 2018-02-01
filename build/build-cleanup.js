/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  und = require('../src/und/und.json');

class Cleanup {
  /**
   * Constructor
   */
  constructor() {
    this._buildFile = './build/build-undetermined.js';
    this.run();
  }

  /**
   * Remove existing diacritics from undetermined list
   * @param {object} output - The database file content
   * @param {object} charList - A Set object containing all diacritics from the
   * database
   * @return {object}
   */
  removeUndeterminedDuplicates(output, charList) {
    [...charList].forEach(char => {
      if (output.und.und.data[char]) {
        delete output.und.und.data[char];
        delete und.data[char];
        this._buildContent = this._buildContent.replace(char, '');
        console.log(`Removed "${char}" from "und"`);
      }
    });
    this.saveFiles();
    return output;
  }

  /**
   * Save modified "build-undetermined.js" and "und/und.json" files
   */
  saveFiles() {
    fs.writeFile(this._buildFile, this._buildContent, 'utf8', err => {
      if (err) {
        throw err;
      }
      console.log(`"${this._buildFile}" updated`);
    });
    fs.writeFile(
      'src/und/und.json',
      JSON.stringify(und, null, 2),
      'utf8',
      err => {
        if (err) {
          throw err;
        }
        console.log('"und.json" file updated');
      }
    );
  }

  /**
   * Runs the build cleanup
   */
  run() {
    this._buildContent = fs.readFileSync(this._buildFile, 'utf8');
  }

}

module.exports = new Cleanup();
