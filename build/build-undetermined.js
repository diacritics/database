/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  und = require('./templates/und.json'),
  Utils = require('./processes/utils');

/**
 * This file should only need to be run if additional diacritics are added to
 * the diacritics list below. It updates the "und.json" file and includes all
 * of the listed diacritics. The build process removes duplicates.
 */
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
    /**
     * This list was copied from https://git.io/vNPua
     * Duplicate diacritics will automatically be removed from this list by the
     * build-cleanup script. Lone characters without diacritics will need to be
     * manually removed
     */
    this.diacritics = [
      'aàảãạăằắẳẵặầấẩẫậåā', 'AÀẢÃẠĂẰẮẲẴẶẦẤẨẪẬÅĀ',
      'cč', 'CČ',
      'dđď', 'DĐĎ',
      'eèẻẽẹêềếểễệëěē', 'EÈẺẼẸÊỀẾỂỄỆËĚĒ',
      'iìỉĩịī', 'IÌỈĨỊÏĪ',
      'nň', 'NŇ',
      'oòỏõọôồốổỗộơởỡớờợøō', 'OÒỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢØŌ',
      'rř', 'RŘ',
      'sšș', 'SŠȘ',
      'tťțţ', 'TŤȚŢ',
      'uùủũụưừứửữựůū', 'UÙỦŨỤƯỪỨỬỮỰŮŪ',
      'yỳỷỹỵÿ', 'YỲỶỸỴŸ',
      'zž', 'ZŽ'
    ];
    this.run();
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
      caseValue = Utils.getCase(base);
    block.forEach(diacritic => {
      und.data[diacritic] = {
        case: caseValue,
        mapping: {
          base
        }
      };
    });
  }

  /**
   * Write resulting "und.json" file using the global "und" variable
   */
  writeFile() {
    const path = './src/und/';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    fs.writeFile(
      `${path}und.json`,
      JSON.stringify(und, null, 2) + '\n',
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
