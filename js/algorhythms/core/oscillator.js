define([
  'algorhythms/core/context'
], function (AudioContext) {
  'use strict';

  function Oscillator() {
  }

  Oscillator.prototype.noteOn = function (freq, gain) {
    this.osc = AudioContext.createOscillator();
    this.osc.type = 'sine';
    this.osc.frequency.value = freq;

    this.gain = AudioContext.createGain();
    this.gain.gain.value = gain;

    this.osc.start();
    this.osc.connect(this.gain);
    this.gain.connect(AudioContext.destination);
  };

  Oscillator.prototype.noteOff = function () {
    this.gain.gain.value = 0;
    this.osc.stop();
  };

  return Oscillator;
});
