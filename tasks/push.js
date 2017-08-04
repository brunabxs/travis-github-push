var git = require('gulp-git');
var gulp = require('gulp');

module.exports = function () {
    var token = process.env.GH_TOKEN;
    var branch = process.env.TRAVIS_BRANCH;

    git.addRemote('origin-travis', 'https://' + token + '@github.com/brunabxs/travis-github-push.git', function (error) {
        if (error)
            throw error;

        git.push('origin-travis', branch, function (error) {
            if (error)
                throw error;

            return git.push('origin-travis', branch, { args: '--tags' }, function (error) {
                if (error)
                    throw error;
            });
        });
    });

};
