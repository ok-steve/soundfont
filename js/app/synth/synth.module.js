define([
  'angular',
  'app/synth/poly-synth.factory',
  'app/synth/synth-def.factory',
  'app/synth/synth-settings.directive',
  'app/synth/modules/modules.module'
], function (angular, PolySynthFactory, SynthDefFactory, SynthSettingsDirective) {
  'use strict';

  var module = angular.module('app.synth', [
    'synth.modules'
  ]);

  module.directive('synthSettings', SynthSettingsDirective);

  module.factory('polySynth', PolySynthFactory);
  module.factory('synthDef', SynthDefFactory);
});
