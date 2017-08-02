#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

upload_files() {
  git remote add origin-travis https://${GH_TOKEN}@github.com/brunabxs/travis-github-push.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-travis ${TRAVIS_BRANCH}
}

setup_git
upload_files
