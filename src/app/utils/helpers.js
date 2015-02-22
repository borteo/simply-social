/**
* utils/helpers.js
*/
'use strict';

angular.module('instaOrganizer')
  .service('helpers', function() {

    this.intersectionObjects = function() {
      var Results          = arguments[ 0 ];
      var LastArgument     = arguments[arguments.length - 1];
      var ArrayCount       = arguments.length;
      var areEqualFunction = _.isEqual;

      if( typeof LastArgument === 'function' ) {
        areEqualFunction = LastArgument;
        ArrayCount--;
      }

      for ( var i = 1; i < ArrayCount ; i++ ) {
        var array = arguments[i];
        Results   = intersectionObjects2( Results, array, areEqualFunction );
        if ( Results.length === 0 ) break;
      }
      return Results;
    };
    
    var intersectionObjects2 = function( a, b, areEqualFunction ) {
      var Result = [];

      for ( var i = 0; i < a.length; i++ ) {
        var aElement = a[i];
        var existsInB = _.any(b, function( bElement ) { 
          return areEqualFunction( bElement, aElement ); 
        });
        if ( existsInB ) {
          Result.push( aElement );
        }
      }
      return Result;
    };
  }

);
