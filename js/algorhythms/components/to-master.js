define([
  'algorhythms/core/audio-context',
  'algorhythms/core/gain'
], function (AudioContext, Gain) {
  'use strict';

  function ToMaster(params) {
    var params = params || {};

    this.gain = new Gain(params);

    this.gain.connect(AudioContext.destination);
  }

  ToMaster.prototype.setValueAtTime = function (value, startTime) {
    var value = value || 1,
      startTime = startTime || AudioContext.currentTime;

    this.gain.gain.setValueAtTime(value, startTime);
  };

  ToMaster.prototype.disconnect = function () {
    this.gain.disconnect();
  };

  return ToMaster;
});
