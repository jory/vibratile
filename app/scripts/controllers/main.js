'use strict';

angular.module('vibratileApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $window.navigator.vibrate(1000);
  });
