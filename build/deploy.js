/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const deploy = require('@julmot/git-branch-deploy');

deploy({
  branch: 'dist',
  sourceDir: `${__dirname}/out/`,
  deployDir: `${__dirname}/deploy/`
});