'use strict';

/**
 * @ngdoc overview
 * @name amoebageekgithubioApp
 * @description
 * # amoebageekgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('amoebageekgithubioApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
