define([
], function () {
  'use strict';

  var AudioContext;

  AudioContext = window.AudioContext || window.webkitAudioContext;

  return new AudioContext();
});
