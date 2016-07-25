'use strict';

export default function AppRoutes( $routeProvider ) {
  $routeProvider.when( '/settings', {
    templateUrl: 'templates/settings.controller.html',
    controller: 'SettingsController',
    controllerAs: 'vm'
  }).when( '/', {
    templateUrl: 'templates/index.controller.html',
    controller: 'IndexController',
    controllerAs: 'vm'
  }).otherwise({
    redirectTo: '/'
  });
}

AppRoutes.$inject = [
  '$routeProvider'
];
