'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

gulp.task('partials', function () {
  return gulp.src([
    paths.src + '/templates/**/*.html'
  ])
  .pipe($.minifyHtml({
    empty: true,
    spare: true,
    quotes: true
  }))
  .pipe($.angularTemplatecache('templateCacheHtml.js', {
    root: 'views',
    module: 'simplySocial'
  }))
  .pipe(gulp.dest(paths.tmp + '/partials/'));
});
