define([
], function () {
  'use strict';

  var MIDI = {
    mtof: function (midi) {
      return Math.pow(2, Math.floor(midi) / 12.0);
    }
  };

  return MIDI;
});
