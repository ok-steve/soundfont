define([
  'algorhythms/core/audio-context',
  'algorhythms/core/gain',
  'algorhythms/components/simple-oscillator'
], function (AudioContext, Gain, SimpleOscillator) {
  'use strict';

  function SynthDef(nodes) {
    this.osc = new nodes['osc1'].proto(nodes['osc1'].params);
  }

  SynthDef.prototype.start = function (freq, gain) {
    this.gain = new Gain({
      gain: gain
    });

    this.osc.connect(this.gain);
    this.gain.connect(AudioContext.destination);

    this.osc.start(freq);
  };

  SynthDef.prototype.stop = function () {
    this.osc.stop();
    this.gain.disconnect();
  };

  return SynthDef;
});
