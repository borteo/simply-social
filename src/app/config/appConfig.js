/**
* appConfig.js
* ---------------
* constants used in the app
*/
'use strict';

angular.module('simplySocial')
  .constant('appConfig', (function() {

    // TODO: set a gulp task to deploy to prod and change this variable
    var isDev      = true;  // false;
    var enviroment = {};

    return {
      env: enviroment
    };

  })());
