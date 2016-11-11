/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
"use strict";
const del = require("del"),
    fs = require("node-fs-extra"),
    git = require("simple-git");

// settings
const outDir = `${__dirname}/out/`,
    deployDir = `${__dirname}/deploy/`,
    gitName = process.env.GIT_USER_NAME,
    gitEmail = process.env.GIT_USER_EMAIL,
    githubRepository = process.env.GITHUB_REPOSITORY,
    githubUser = process.env.GITHUB_USERNAME,
    githubToken = process.env.GITHUB_TOKEN;
let githubRemote = githubRepository.replace("https://", "");
githubRemote = `https://${githubUser}:${githubToken}@${githubRemote}`;

if(!process.env.TRAVIS){
    console.log("Deploying is only available on Travis CI");
    process.exit();
}
if(process.env.TRAVIS_PULL_REQUEST !== "false"){
    console.log("Deploying is not available in pull requests");
    process.exit();
}

// create deploy folder
del.sync([`${deployDir}**`]);
fs.mkdirSync(deployDir);

// clone dist branch, commit and push changes
git()
    .clone(githubRepository, deployDir)
    .then(() => {
        git(deployDir)
            .checkout("dist")
            .then(() => {
                fs.copySync(outDir, deployDir);
                git(deployDir)
                    .addConfig("user.name", gitName)
                    .addConfig("user.email", gitEmail)
                    .removeRemote("origin")
                    .addRemote("origin", githubRemote)
                    .add(".")
                    .commit("Update dist")
                    .push("origin", "dist");
            });
    });
