'use strict';

angular.module('vibratileApp')
  .controller('MainCtrl', function ($scope, $interval, $window) {

    // What's the preferred angular style for preserving references to
    // private functions?
    //
    // Should you attach the function to it's associated scope, or is
    // it normal to keep it as a variable within the enclosing function?

    var _purr;

    $scope.isPurring = false;
    $scope.purrLength = 150;
    $scope.purrDelay = 450;

    $scope.startPurring = function () {
      $scope.isPurring = true;
      _purr = $interval(function(){
        $window.navigator.vibrate($scope.purrLength);
      }, $scope.purrDelay);
    }

    $scope.stopPurring = function () {
      $scope.isPurring = false;
      $interval.cancel(_purr);
    }
  });
