const { Octokit } = require("@octokit/rest");
require("dotenv").config();
const { version } = require("./test.json");

const octakit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: "Release Generator",
});

octakit.rest.repos.createRelease({
    owner: "Criticalcarpet",
    repo: "dynamic-version",
    tag_name: version,
    name: version,
    body: "This is a test release",
    draft: false,
    prerelease: false
    }).then((res) => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    }
);