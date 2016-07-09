'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AR = root.AR || {};

    root.AR.MidiUtil = factory();
  }
}(this, function () {

  var MidiUtil = {
    // Midi to frequency
    mtof: function (midi) {
      return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
    },

    // Frequency to midi
    ftom: function (freq) {
      return 12 * (Math.log(freq / 440.0) / Math.log(2)) + 69;
    },

    // Velocity to gain
    vtog: function (vel) {
      return (vel / 127).toFixed(2);
    }
  };

  return MidiUtil;
}));
