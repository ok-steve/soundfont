define([
  'algorhythms/synth-def'
], function (SynthDef) {
  'use strict';

  function Factory() {
    var factory = {
        init: init,
        setParams: setParams,
        start: start,
        stop: stop
      },
      params = {};

    return factory;

    ///////////////

    function init() {
      return new SynthDef(params);
    }

    function setParams(newParams) {
      if (newParams) {
        params = newParams;
      }
    }

    function start(voice, freq, gain) {
      voice.start(freq, gain);
    }

    function stop(voice) {
      voice.stop();
    }
  }

  return Factory;
});
