define([
  'algorhythms/core/context',
  'algorhythms/core/oscillator',
  'algorhythms/utilities/midi'
], function (Context, Oscillator, MIDI) {
  'use strict';

  function Synth() {
    // var carrier,
    //   modulator;
    // this.osc = new Oscillator();
    // this.osc.gain.gain.value = 0;
    // this.osc.gain.connect(Context.destination);

    /**
     * AM Synthesis
     */
   // carrier = new Oscillator();
   // modulator = new Oscillator(4, 40);
   // modulator.osc.connect(carrier.gain.gain);
   // carrier.gain.connect(Context.destination);

    /**
     * FM Synthesis
     */
   // carrier = new Oscillator(440, 10);
   // modulator = new Oscillator(4);
   // modulator.osc.connect(carrier.gain);
   // carrier.gain.connect(carrier.osc.frequency);
   // carrier.osc.connect(Context.destination);

   this.osc = new Oscillator();
  }

  Synth.prototype.noteOn = function (freq, vol) {
    this.osc.noteOn(freq, vol);
  }

  Synth.prototype.noteOff = function (key) {
    this.osc.noteOff();
  }

  return Synth;
});
