'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

var banner = ['/**',
  ' * simplySocial',
  ' * (c) 2015 ~ Matt Borgato',
  ' * License: MIT',
  ' * Last Updated: <%= new Date().toUTCString() %>',
  ' */'
].join('\n');

gulp.task('minify-js', ['partials'], function() {
  return gulp.src([
    paths.bower + '/angular/angular.js',
    paths.bower + '/angular-sanitize/angular-sanitize.js',
    paths.bower + '/angular-route/angular-route.js',
    paths.bower + '/angular-loading-bar/build/loading-bar.js',
    paths.src   + '/app/app.js',
    paths.tmp   + '/partials/templateCacheHtml.js',
    paths.src   + '/app/utils/*.js',
    paths.src   + '/app/config/*.js',
    paths.src   + '/app/models/*.js',
    paths.src   + '/app/controllers/*.js',
    paths.src   + '/app/services/*.js',
    paths.src   + '/app/directives/*.js'
  ])
  .pipe($.concat('app.min.js'))
  .pipe($.ngAnnotate())
  .pipe($.uglify())
  .pipe($.header( banner ))
  .pipe(gulp.dest( paths.dist ));
});

gulp.task('modernizr', function() {
  return gulp.src([
    paths.bower + '/modernizr/modernizr.js',
  ])
  .pipe($.uglify())
  .pipe(gulp.dest( paths.dist ));
});

gulp.task('minify-css', ['styles'], function() {
  return gulp.src([
    paths.tmp + '/**/*.css',
    paths.bower + '/angular-loading-bar/build/loading-bar.css'
  ])
  .pipe($.concat('styles.min.css'))
  .pipe($.csso())
  .pipe(gulp.dest( paths.dist ));
});

gulp.task('html', function () {
  return gulp.src(paths.src + '/*.html')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('images', function () {
  return gulp.src(paths.src + '/assets/images/*')
    .pipe(gulp.dest(paths.dist + '/images/'));
});

gulp.task('fonts', function() {
  return gulp.src(paths.src + '/assets/fonts/**/*.*')
    .pipe(gulp.dest( paths.dist + '/fonts/' ));
});

gulp.task('build', ['modernizr', 'minify-js', 'minify-css', 'html', 'images', 'fonts']);
