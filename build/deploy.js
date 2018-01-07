/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016–2018 The Diacritics Authors
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
'use strict';
const del = require('del'),
  fs = require('node-fs-extra'),
  git = require('simple-git');

// settings
const outDir = `${__dirname}/out/`,
  deployDir = `${__dirname}/deploy/`;
let env = {
  gitName: process.env.GIT_USER_NAME,
  gitEmail: process.env.GIT_USER_EMAIL,
  ghRepository: process.env.GITHUB_REPOSITORY,
  ghUser: process.env.GITHUB_USERNAME,
  ghToken: process.env.GITHUB_TOKEN
};
env.ghRemote = env.ghRepository.replace('https://', '');
env.ghRemote = `https://${env.ghUser}:${env.ghToken}@${env.ghRemote}`;

// validate
if (!process.env.TRAVIS) {
  console.log('Deploying is only available on Travis CI');
  process.exit();
}
if (process.env.TRAVIS_PULL_REQUEST !== 'false') {
  console.log('Deploying is not available in pull requests');
  process.exit();
}
if (process.env.TRAVIS_BRANCH !== 'master') {
  console.log('Deploying is only available for commits on master');
  process.exit();
}
for (let prop in env) {
  if (env.hasOwnProperty(prop)) {
    if (typeof env[prop] === 'undefined' || env[prop] === '') {
      console.log(`Environment variable '${prop}' is not defined`);
      process.exit();
    }
  }
}

// create deploy folder
del.sync([`${deployDir}**`]);
fs.mkdirSync(deployDir);

// clone dist branch, commit and push changes
git()
  .clone(env.ghRepository, deployDir)
  .then(() => {
    git(deployDir)
      .checkout('dist')
      .then(() => {
        fs.copySync(outDir, deployDir);
        git(deployDir)
          .diffSummary((err, diff) => {
            console.log(diff);
          })
          .addConfig('user.name', env.gitName)
          .addConfig('user.email', env.gitEmail)
          .removeRemote('origin')
          .addRemote('origin', env.ghRemote)
          .add('.')
          .commit('Update dist')
          .push('origin', 'dist');
      });
  });
