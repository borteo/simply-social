'use strict';

var gulp  = require('gulp');
var paths = gulp.paths;
var $     = require('gulp-load-plugins')();

gulp.task('styles', ['sprites'], function () {
  return gulp.src([ paths.src + '/assets/stylesheets/*.scss'])
    .pipe($.sass({
      includePaths: require('node-bourbon').includePaths,
      errLogToConsole: true,
    }))
    .pipe(gulp.dest(paths.tmp + '/css'));
});
