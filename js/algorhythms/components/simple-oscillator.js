'use strict';

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([
      'algorhythms/core/oscillator',
      'algorhythms/core/gain',
      'algorhythms/core/biquad-filter'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('algorhythms/core/oscillator'),
      require('algorhythms/core/gain'),
      require('algorhythms/core/biquad-filter')
    );
  } else {
    root.AR.SimpleOscillator = factory(
      root.AR.Oscillator,
      root.AR.Gain,
      root.AR.BiquadFilter
    );
  }
}(this, function (Oscillator, Gain, BiquadFilter) {

  function SimpleOscillator(params) {
    var params = params || {};

    this.osc = new Oscillator(params.osc);
    this.filter = new BiquadFilter(params.filter);
    this.gain = new Gain(params.gain);

    this.osc.connect(this.filter);
    this.filter.connect(this.gain);
  }

  SimpleOscillator.prototype.start = function (freq) {
    this.osc.frequency.value = freq;
    this.osc.start();
  };

  SimpleOscillator.prototype.stop = function () {
    this.osc.stop();
    this.gain.gain.value = 0;
    this.filter.disconnect();
    this.osc.disconnect();
    this.disconnect();
  };

  SimpleOscillator.prototype.connect = function (to) {
    this.gain.connect(to);
  };

  SimpleOscillator.prototype.disconnect = function () {
    this.gain.disconnect();
  };

  return SimpleOscillator;
}));
