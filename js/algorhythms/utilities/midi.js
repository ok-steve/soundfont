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
    },

    ftom: function (freq) {
      var ref = {
        freq: 440.0,
        midi: 69
      };

      return 12 * (Math.log(freq / ref.freq) / Math.log(2)) + ref.midi;
    }
  };

  return MIDI;
});
