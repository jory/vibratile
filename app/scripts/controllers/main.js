'use strict';

angular.module('vibratileApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.vibrations = [
      { duration: '1'},
      { duration: '10'},
      { duration: '100'},
      { duration: '1000'},
      { duration: '10000'},
      { duration: 'Hold to buzz'}
    ];
  });
