'use strict';

angular.module('vibratileApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'uiSlider'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
