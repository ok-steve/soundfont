define([
  'angular',
  'app/app.routes',
  'app/app.controller',
  'ngRoute',
  'app/piano/piano.module',
], function (angular, Routes, AppController) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'app.piano',
  ]);

  app.config(Routes);

  app.controller('AppController', AppController);
});
