const { Octokit } = require("@octokit/rest");
require("dotenv").config();
const { version } = require("./test.json");


const args = process.argv.slice(2);
const token = args[0] ?? process.env.GITHUB_TOKEN;

const octakit = new Octokit({
  auth: token,
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