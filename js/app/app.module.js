define([
  'angular',
  'app/app.routes',
  'app/app.controller',
  'app/directives/keyboard',
  'ngRoute'
], function (angular, Routes, AppController, KeyboardDirective) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute'
  ]);

  app.config(Routes);

  app.controller('AppController', AppController);

  app.directive('guiKbd', KeyboardDirective);
});
