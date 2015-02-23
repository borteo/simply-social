/**
* app.js - simplySocial
* -----------
* Angular app routes
*
* Author: Matt Borgato
* Date: 22nd February 2015
*
*/
'use strict';

angular.module('simplySocial', [
  'ngRoute',
  'ngSanitize',
  'ngFlowGrid'
])
  .config(function( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/settings/', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise('/');
  });
