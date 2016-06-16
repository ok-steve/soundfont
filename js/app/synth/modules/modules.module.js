define([
  'angular',
  'app/synth/modules/simple-oscillator.directive'
], function (angular, SimpleOscillatorDirective) {
  'use strict';

  var module = angular.module('synth.modules', []);

  module.directive('simpleOscillator', SimpleOscillatorDirective);
});
