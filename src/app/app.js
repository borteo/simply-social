/**
* app.js
* -----------
* Angular app routes
*/
'use strict';

angular.module('instaOrganizer', [
  'ngRoute',
  'ngSanitize',
  'angular-loading-bar'
])
  .config(function( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/photos/', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .otherwise('/');
  })
  .run(function( $rootScope ) {
    $rootScope.currentUser = 'John Doe';
  });
