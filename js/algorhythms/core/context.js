define([
], function () {
  'use strict';

  var AudioContext = window.AudioContext || window.webkitAudioContext;

  return new AudioContext();
});
