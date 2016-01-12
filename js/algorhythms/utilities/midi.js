define([
], function () {
  'use strict';

  var MIDI = {
    mtof: function (midi) {
      return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
    }
  };

  return MIDI;
});
