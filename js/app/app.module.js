define([
  'angular',
  'app/app.routes',
  'app/index.controller',
  'app/settings.controller',

  'ngRoute',
  'ngMaterial',

  'app/keyboard/keyboard.module',
  'app/midi/midi.module',
  'app/piano/piano.module',
  'app/synth/synth.module'
], function (angular, AppRoutes, IndexController, SettingsController) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'ngMaterial',

    'app.keyboard',
    'app.midi',
    'app.piano',
    'app.synth'
  ]);

  app.config(AppRoutes);

  app.controller('IndexController', IndexController);
  app.controller('SettingsController', SettingsController);
});
