define([], function () {
  'use strict';

  Routes.$inject = [
    '$routeProvider'
  ];

  function Routes($routeProvider) {
    $routeProvider.when('/settings', {
      templateUrl: '../templates/settings.controller.html',
      controller: 'SettingsController',
      controllerAs: 'vm'
    }).when('/', {
      templateUrl: '../templates/index.controller.html',
      controller: 'IndexController',
      controllerAs: 'vm'
    }).otherwise({
      redirectTo: '/'
    });
  }

  return Routes;
});

