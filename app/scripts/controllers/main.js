'use strict';

angular.module('vibratileApp')
  .controller('MainCtrl', function ($scope, $interval, $window) {

    $scope.isPurring = false;
    var _purr;

    $scope.startPurring = function () {
      $scope.isPurring = true;
      _purr = $interval(function(){
        $window.navigator.vibrate(300);
      }, 1200);
    }

    $scope.stopPurring = function () {
      $scope.isPurring = false;
      $interval.cancel(_purr);
    }
  });
