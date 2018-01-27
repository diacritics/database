/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const fs = require('fs'),
  und = require('./templates/und.json'),

  // This file only needs to be run once, or if the diacritics list is updated!
  // copied from https://git.io/vNPua
  diacritics = [
    'aàáảãạăằắẳẵặâầấẩẫậäåāą', 'AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ',
    'cçćč', 'CÇĆČ',
    'dđď', 'DĐĎ',
    'eèéẻẽẹêềếểễệëěēę', 'EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ',
    'iìíỉĩịîïī', 'IÌÍỈĨỊÎÏĪ',
    'lł', 'LŁ',
    'nñňń', 'NÑŇŃ',
    'oòóỏõọôồốổỗộơởỡớờợöøō', 'OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ',
    'rř', 'RŘ',
    'sšśșş', 'SŠŚȘŞ',
    'tťțţ', 'TŤȚŢ',
    'uùúủũụưừứửữựûüůū', 'UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ',
    'yýỳỷỹỵÿ', 'YÝỲỶỸỴŸ',
    'zžżź', 'ZŽŻŹ'
  ],

  buildEntries = block => {
    block = block.split('');
    const base = block.shift(),
      capital = base.toLowerCase() !== base;
    block.forEach(diacritic => {
      und.data[diacritic] = {
        capital,
        mapping: {
          base
        }
      };
    });
  };

diacritics.forEach(block => buildEntries(block));
fs.writeFile(
  './src/und/und.json',
  JSON.stringify(und, null, ' ') + '\n',
  err => {
    if (err) {
      console.log('Error writing und.json', err);
    }
  }
);
