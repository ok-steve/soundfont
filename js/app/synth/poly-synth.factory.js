define([
  'tone'
], function (Tone) {
  'use strict';

  function Factory() {
    const factory = new Tone.PolySynth(10, Tone.MonoSynth).toMaster();

    return factory;
  }

  return Factory;
});
