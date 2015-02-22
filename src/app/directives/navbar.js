'use strict';

angular.module('simplySocial')
  .directive('navbar',
    function( $rootScope ) {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/navbar.html',
        link: function( scope, element, attrs ) {
          
          scope.username = 'jessica';
          $rootScope.isBlur = false;

          scope.newMessage = function() {
            scope.$broadcast( 'NEW_MESSAGE_TRIGGER' );
            $rootScope.isBlur        = true;
          };

        }

      };
    }  
  );
