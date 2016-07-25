define([
  'angular',
  'app/synth/poly-synth.factory'
], function (angular, PolySynthFactory) {
  'use strict';

  let module = angular.module('app.synth', []);

  module.factory('polySynth', PolySynthFactory);
});
