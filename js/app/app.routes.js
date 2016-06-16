define([], function () {
  'use strict';

  Routes.$inject = [
    '$routeProvider'
  ];

  function Routes($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../templates/app.controller.html',
      controller: 'AppController',
      controllerAs: 'vm'
    }).otherwise({
      redirectTo: '/'
    });
  }

  return Routes;
});

