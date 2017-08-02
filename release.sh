#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git checkout ${TRAVIS_BRANCH}
gulp release
git remote add origin-travis https://${GH_TOKEN}@github.com/brunabxs/travis-github-push.git > /dev/null 2>&1
git push --quiet --set-upstream origin-travis ${TRAVIS_BRANCH}
git push --quiet --set-upstream origin-travis --tags
