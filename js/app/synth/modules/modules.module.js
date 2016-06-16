define([
  'angular',
  'app/synth/modules/simple-oscillator.directive',
  'app/synth/modules/to-master.directive'
], function (angular, SimpleOscillatorDirective, ToMasterDirective) {
  'use strict';

  var module = angular.module('synth.modules', []);

  module.directive('simpleOscillator', SimpleOscillatorDirective);
  module.directive('toMaster', ToMasterDirective);
});
