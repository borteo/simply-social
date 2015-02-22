/**
* controllers/home.js
*/
'use strict';

angular.module('simplySocial')
  .controller('HomeCtrl', 
    function( 
      $rootScope,
      $scope
    ) {

    $rootScope.currentPage = 'Home';

    var modes = [ 'list', 'block' ];

    // potential JSON received from an API call
    var messages = [
      {
        author: 'Sam Soffes',
        message: 'How to Get Inspired: the Right Way - Designmodo <a href="http://bit.ly/1ifds">bit.ly/1ifds</a> Good stuff from <a href="/#/">@designmodo</a>',
        replies: [
          {
            author: 'Jed Bridges',
            message: 'Great way to start the week. Thanks for sharing',
            time: '4m',
          },
          {
            author: 'Ren Walker',
            message: 'Feeling inspired now... thanks for great article <a href="/#/">@designmodo</a>',
            time: '10m',
          }
        ],
        time: '3m',
        expand: true,
        isCollapsed: true
      },
      {
        author: 'Meg Robichaud',
        message: 'My view this morning is simply beautiful... <a href="http://instagram.com/p/mV0PUrHRwQ/">instagram.com/p/mV0PUrHRwQ/</a>',
        image: 'beach.jpg',
        time: '25m',
        expand: false,
        isCollapsed: true
      },
      {
        author: 'Kerem Suer',
        message: '8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="http://on.mash.to/1oubyu8">on.mash.to/1oubyu8</a>',
        time: '50m',
        expand: false,
        isCollapsed: true
      },
      {
        author: 'Liang Shi',
        message: 'How to get animations out of your head. <a href="/#/">http://bit.ly/1q7BngO</a> Funny and useful.',
        time: '1h',
        expand: false,
        isCollapsed: true
      },
      {
        author: 'Vitor Leal',
        message: 'You have to see this bike. It will make your daily commute a absolute joy ride! <a href="vimeo.com/p/mV0PUrHRwQ/">vimeo.com/p/mV0PUrHRwQ/</a>',
        time: '1h',
        image: 'bike.jpg',
        expand: false,
        isCollapsed: true
      },
      {
        author: 'Pallavi Gupta',
        message: 'Need some reading? 11 free ebooks for designers | Creative Bloq <a href="bit.ly/1lE5QDM">bit.ly/1lE5QDM</a> via <a href="#">@netmag</a>.',
        replies: [
          {
            author: 'Laura Occhino',
            message: 'Great way to start the week. Thanks for sharing',
            time: '45m',
          },
          {
            author: 'Leila White',
            message: 'Feeling inspired now... thanks for great article <a href="#">@designmodo</a>',
            time: '1h',
          }
        ],
        time: '2h',
        expand: true,
        isCollapsed: true
      },
      {
        author: 'Jenny Shen',
        message: 'Perfect day to be outside taking pictures <a href="http://instagram.com/p/mV0PUrHRwQ/">instagram.com/p/mV0PUrHRwQ/</a>',
        time: '3h',
        image: 'korn.jpg',
        expand: false,
        isCollapsed: true
      },
      
    ];
    
    var initialize = function() {
      $scope.activeMode = modes[ 0 ];
      $scope.posts      = messages;
    };

    $scope.changeMode = function( idx ) {
      $scope.activeMode = modes[ idx ];
    };

    $scope.toggleExpand = function( idx ) {
      if ( !$scope.posts[ idx ] || typeof $scope.posts[ idx ].isCollapsed === 'undefined') {
        return;
      }
      $scope.posts[ idx ].isCollapsed = !$scope.posts[ idx ].isCollapsed;
    };

    initialize();
  });
