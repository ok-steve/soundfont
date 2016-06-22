define([
  'angular',
  'app/midi/midi-access.factory',
  'app/midi/midi-select.directive'
], function (angular, MidiAccessFactory, MidiSelectDirective) {
  'use strict';

  var module = angular.module('app.midi', []);

  module.directive('midiSelect', MidiSelectDirective);

  module.factory('midiAccess', MidiAccessFactory);
});
