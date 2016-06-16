define([
  'angular',
  'app/app.routes',
  'app/app.controller',
  'ngRoute',
  'app/keyboard/keyboard.module',
  'app/piano/piano.module',
], function (angular, Routes, AppController) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'app.keyboard',
    'app.piano',
  ]);

  app.config(Routes);

  app.controller('AppController', AppController);
});
