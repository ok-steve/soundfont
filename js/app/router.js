define([
  'ngRoute'
], function () {
  'use strict';

  function Router($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../templates/index.html',
      controller: 'IndexController',
      controllerAs: 'IndexCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }

  Router.$inject = ['$routeProvider'];

  return Router;
});
