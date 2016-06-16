define([
  'algorhythms/core/audio-context'
], function (AudioContext) {
  'use strict';

  function SynthDef(nodes) {
    this.osc1 = new nodes['osc1'].proto(nodes['osc1'].params);
    this.master = new nodes['master'].proto(nodes['master'].params);

    this.osc1.connect(this.master.gain);
  }

  SynthDef.prototype.start = function (freq, gain) {
    this.master.setValueAtTime(gain, AudioContext.currentTime);
    this.osc1.start(freq);
  };

  SynthDef.prototype.stop = function () {
    this.osc1.stop();
    this.master.gain.disconnect();
  };

  return SynthDef;
});
