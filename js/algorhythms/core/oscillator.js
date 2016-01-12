define([
  'algorhythms/core/context'
], function (AudioContext) {
  'use strict';

  function Oscillator(freq, gain, type) {
    this.osc = AudioContext.createOscillator();
    this.gain = AudioContext.createGain();

    this.osc.frequency.value = freq || 440;
    this.gain.gain.value = gain || 1;
    this.osc.type = type || 'sine';

    this.osc.connect(this.gain);
    this.osc.start();
  }

  Oscillator.prototype.noteOn = function (gain, freq) {
    if (freq) {
      this.osc.frequency.value = freq;
    }

    this.gain.gain.value = gain || 1;
  };

  Oscillator.prototype.noteOff = function () {
    this.gain.gain.value = 0;
  };

  return Oscillator;
});
