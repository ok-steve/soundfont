define([], function () {
  'use strict';

  function Factory() {
    let factory = {
      mtof: mtof,
      ftom: ftom,
      vtog: vtog
    };

    return factory;

    ///////////////

    // Midi to frequency
    function mtof(midi) {
      return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
    }

    // Frequency to midi
    function ftom(freq) {
      return 12 * (Math.log(freq / 440.0) / Math.log(2)) + 69;
    }

    // Velocity to gain
    function vtog(vel) {
      return (vel / 127).toFixed(2);
    }
  }

  return Factory;
});
