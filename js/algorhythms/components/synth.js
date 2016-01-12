define([
  'algorhythms/core/context',
  'algorhythms/core/oscillator'
], function (Context, Oscillator) {
  'use strict';

  function Synth() {
    var carrier,
      modulator;

    /**
     * AM Synthesis
     */
//    carrier = new Oscillator();
//    modulator = new Oscillator(4, 40);
//    modulator.osc.connect(carrier.gain.gain);
//    carrier.gain.connect(Context.destination);

    /**
     * FM Synthesis
     */
//    carrier = new Oscillator(440, 10);
//    modulator = new Oscillator(4);
//    modulator.osc.connect(carrier.gain);
//    carrier.gain.connect(carrier.osc.frequency);
//    carrier.osc.connect(Context.destination);
  }

  return Synth;
});
