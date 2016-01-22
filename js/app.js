define([
  'angular',
  'algorhythms/ng/router',
  'algorhythms/ng/controllers/index',
  'algorhythms/ng/directives/keyboard'
], function (angular, Router, IndexController, KeyboardDirective) {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(Router);

  app.controller('IndexController', IndexController);

  app.directive('guiKbd', KeyboardDirective);

  angular.bootstrap(document, ['app']);
});
