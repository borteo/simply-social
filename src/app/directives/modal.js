'use strict';

angular.module('simplySocial')
  .directive('modal',
  function( $rootScope ) {

    return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/modal.html',
    link: function( scope, element, attrs ) {

      scope.isActive = false;

      scope.close = function() {
        $rootScope.isBlur = false;
        scope.isActive    = false;
      };

      scope.$on( 'NEW_MESSAGE_TRIGGER', function( event, message ) {
        scope.isActive = true;
      });

    }

    };
  }  
  );
