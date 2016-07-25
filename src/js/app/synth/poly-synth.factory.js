define([
  'tone',
  'lib/synth-def'
], function (Tone, SynthDef) {
  'use strict';

  function Factory() {
    let factory = new Tone.PolySynth(10, SynthDef).toMaster();

    return factory;
  }

  return Factory;
});
