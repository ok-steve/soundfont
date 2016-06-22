define([
  'angular',
  'app/app.routes',
  'app/app.controller',
  'ngRoute',
  'app/keyboard/keyboard.module',
  'app/midi/midi.module',
  'app/piano/piano.module',
  'app/synth/synth.module'
], function (angular, Routes, AppController) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'app.keyboard',
    'app.midi',
    'app.piano',
    'app.synth'
  ]);

  app.config(Routes);

  app.controller('AppController', AppController);
});
