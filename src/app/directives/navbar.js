'use strict';

angular.module('instaOrganizer')
  .directive('navbar',
    function( $rootScope, $location ) {

      return {
        restrict: 'E',
        replace: true,
        scope: { },
        templateUrl: 'views/navbar.html',
        link: function( scope, element, attrs ) {
          
          scope.username = 'jessica';

        }

      };
    }  
  );
