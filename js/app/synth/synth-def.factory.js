define([
  'algorhythms/core/audio-context',
  'algorhythms/core/gain',
  'algorhythms/components/simple-oscillator'
], function (AudioContext, Gain, SimpleOscillator) {
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
      return new Synth(params);
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

  /**
   * Generic, configurable synth
   */

  function Synth(params) {
    var params = params || {};

    this.osc = new SimpleOscillator(params);
  }

  Synth.prototype.start = function(freq, gain) {
    this.gain = new Gain({
      gain: gain
    });

    this.osc.connect(this.gain);
    this.gain.connect(AudioContext.destination);

    this.osc.start(freq);
  };

  Synth.prototype.stop = function() {
    this.osc.stop();
    this.gain.disconnect();
  };

  return Factory;
});
