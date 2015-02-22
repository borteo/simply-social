/**
* gulpfile.js
* -----------
* main file
*/
'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.paths = {
  src:   'src',
  dist:  'dist',
  tmp:   '.tmp',
  bower: 'bower_components',
  node:  'node_modules',
  e2e:   'e2e'
};

require('require-dir')('./gulp');

gulp.task('webserver', function() {
  connect.server({
  	livereload: true,
  	root: 'dist',
  });
});

gulp.task('default', ['webserver']);
