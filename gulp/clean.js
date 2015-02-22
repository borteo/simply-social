var gulp = require('gulp');

var paths = gulp.paths;
var del = require('del');

// clean only the temp files
gulp.task('clean', function( done ) {
  del([paths.dist + '/', paths.tmp + '/'], done);
});

// tabula rasa, remove also node and bower components
gulp.task('clean-all', function( done ) {
  del([paths.dist + '/', paths.tmp + '/', paths.bower + '/', paths.node + '/'], done);
});