/* eslint-disable */

const path = require('path');
const git = require('git-state');
const ghpages = require('gh-pages');

const repo = path.resolve(__dirname, '../../..')
const pack = path.resolve(__dirname, '..')

if (!git.isGitSync(repo)) throw new Error(`Not a git repo: ${repo}`);

const state = git.checkSync(repo);
// if (git.untrackedSync(pack) > 0) throw new Error(`Untracked files in ${pack}`);
// if (git.dirtySync(pack) > 0) throw new Error(`Dirty files in ${pack}`);

require('git-last-commit').getLastCommit((err, commit) => {
  if (err) throw err;
  // console.log(commit);

  ghpages.publish('catalog/build', {
    message: `Auto-generated commit, see https://github.com/AJInteractive/InterviewJS/commit/${commit.hash}`,
    branch: 'master',
    repo: 'https://github.com/AJInteractive/styleguide.interviewjs.io.git'
  }, (err, result) => {
    if (err) throw err;
  });
});
