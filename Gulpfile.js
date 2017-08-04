var bump = require('./tasks/bump.js');
var changelog = require('./tasks/changelog.js');
var checkout = require('./tasks/checkout.js');
var clean = require('./tasks/clean.js');
var commit = require('./tasks/commit.js');
var gulp = require('gulp');
var jshint = require('./tasks/jshint.js');
var runSequence = require('run-sequence').use(gulp);
var push = require('./tasks/push.js');
var tag = require('./tasks/tag.js');
var template = require('./tasks/template.js');
var zip = require('./tasks/zip.js');

gulp.task('bump', bump);
gulp.task('changelog', changelog);
gulp.task('checkout', checkout);
gulp.task('clean', clean);
gulp.task('commit', commit);
gulp.task('lint', jshint);
gulp.task('push', push);
gulp.task('tag', tag);
gulp.task('template', template);
gulp.task('zip', zip);

gulp.task('build', function (callback) {
    runSequence('clean', 'lint', 'template', callback);
});

gulp.task('package', function (callback) {
    runSequence('build', 'zip', callback);
});

gulp.task('release-ci', function (callback) {
    runSequence('bump', 'package', 'changelog', 'checkout', 'commit', 'tag', 'push', callback);
});

gulp.task('release', function (callback) {
    runSequence('bump', 'package', 'changelog', 'commit', 'tag', callback);
});