define([
  'angular',
  'app/router',
  'app/controllers/index',
  'app/directives/keyboard'
], function (angular, Router, IndexController, KeyboardDirective) {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(Router);

  app.controller('IndexController', IndexController);

  app.directive('guiKbd', KeyboardDirective);

  if (navigator.hasOwnProperty('serviceWorker')) {
    navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    });
  }

  angular.bootstrap(document, ['app']);
});
