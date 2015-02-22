'use strict';

var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');

var paths = gulp.paths;

var sprites = {
  src: paths.src + '/assets/images/sprites/icon/*.png',
  dest: {
    css: paths.src + '/assets/stylesheets/module/',
    image: paths.dist + '/images/sprites/'
  },
  options: {
    cssName: '_sprites.scss',
    cssFormat: 'css',
    cssOpts: {
      cssClass: function (item) {
        // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
        if (item.name.indexOf('-hover') !== -1) {
          return '.icon-' + item.name.replace('-hover', ':hover');
          // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
        } else {
          return '.icon-' + item.name;
        }
      }
    },
    imgName: 'icon-sprite.png',
    imgPath: '/images/sprites/icon-sprite.png'
  }
};


var config = sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

  spriteData.img
    .pipe(gulp.dest(config.dest.image));

  spriteData.css
    .pipe(gulp.dest(config.dest.css));
});