define([
  'angular',
  'app/piano/piano-roll.directive'
], function (angular, PianoRollDirective) {
  'use strict';

  var module = angular.module('app.piano', []);

  module.directive('pianoRoll', PianoRollDirective);
});
