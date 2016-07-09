define([
  'angular',
  'app/midi/midi-access.factory',
  'app/midi/midi-utilities.factory',
  'app/midi/midi-select.directive'
], function (angular, MidiAccessFactory, MidiUtilitiesFactory, MidiSelectDirective) {
  'use strict';

  var module = angular.module('app.midi', []);

  module.directive('midiSelect', MidiSelectDirective);

  module.factory('midiAccess', MidiAccessFactory);
  module.factory('midiUtilities', MidiUtilitiesFactory);
});
