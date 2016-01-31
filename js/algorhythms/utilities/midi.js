define([
], function () {
  'use strict';

  var MIDI = {
    mtof: function (midi) {
      var ref = {
        freq: 440.0,
        midi: 69
      }

      return ref.freq * Math.pow(2, (Math.floor(midi) - ref.midi) / 12.0);
    }
  };

  return MIDI;
});
