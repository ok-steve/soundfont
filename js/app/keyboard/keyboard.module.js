define([
  'angular',
  'app/keyboard/keyboard-input.factory'
], function (angular, KeyboardInputFactory) {
  'use strict';

  var module = angular.module('app.keyboard', []);

  module.factory('keyboardInput', KeyboardInputFactory);
});
