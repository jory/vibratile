'use strict';

angular.module('vibratileApp')
  .controller('MainCtrl', function ($scope, $document, $interval, $window) {

    // What's the preferred angular style for preserving references to
    // private functions?
    //
    // Should you attach the function to it's associated scope, or is
    // it normal to keep it as a variable within the enclosing function?

    var faces = ['<^.^>', '{^.^>', '{^.^}', '<^.^}'];

    var _purr;
    var pCount = 0;
    var purr = function () {
      if (pCount == 4) pCount = 0;

      $document.attr('title', faces[pCount++]);
      $window.navigator.vibrate($scope.purrLength);
    };

    $scope.isPurring = false;
    $scope.purrLength = 150;
    $scope.purrDelay = 450;

    $scope.startPurring = function () {
      $scope.isPurring = true;
      _purr = $interval(purr, $scope.purrDelay);
    };

    $scope.stopPurring = function () {
      $scope.isPurring = false;
      pCount = 0;
      $document.attr('title', '(^_^)');
      $interval.cancel(_purr);
    };

    $scope.$watch('purrDelay', function () {
      if ($scope.isPurring) {
        $interval.cancel(_purr);
        _purr = $interval(purr, $scope.purrDelay);
      }
    });
  });
