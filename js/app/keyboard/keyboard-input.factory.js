define([
  'algorhythms/utilities/midi'
], function (MidiUtil) {
  'use strict';

  function Factory() {
    var factory = {
        onkeydown: onkeydown,
        onkeyup: onkeyup
      },
      keyMap = {
        65: 60, // a:C
        87: 61, // w:C#/Db
        83: 62, // s:D
        69: 63, // e:D#/Eb
        68: 64, // d:E
        70: 65, // f:F
        84: 66, // t:F#/Gb
        71: 67, // g:G
        89: 68, // y:G#/Ab
        72: 69, // h:A
        85: 70, // u:A#/Bb
        74: 71, // j:B
        75: 72  // k:C
      };

    return factory;

    ///////////////


    function keyInMap(key) {
      return Object.keys(keyMap).indexOf(key.toString()) !== -1;
    }

    function onkeydown(callback) {
      document.addEventListener('keydown', function (e) {
        if (keyInMap(e.keyCode) && !e.repeat) {
          callback(MidiUtil.mtof(keyMap[e.keyCode]));
        }
      });
    }

    function onkeyup(callback) {
      document.addEventListener('keyup', function (e) {
        if (keyInMap(e.keyCode)) {
          callback(MidiUtil.mtof(keyMap[e.keyCode]));
        }
      });
    }
  }

  return Factory;
});
