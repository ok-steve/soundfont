define([
  'keyboard',
  'underscore'
], function (keyboardJS, _) {
  'use strict';

  Factory.$inject = [
    'midiUtilities'
  ];

  function Factory(MidiUtil) {
    let factory = {
      bind: bind,
      unbind: unbind
    };

    return factory;

    ///////////////

    function bind(keydown, keyup) {
      var keyMap = {
        'a': 60, // a:C
        'w': 61, // w:C#/Db
        's': 62, // s:D
        'e': 63, // e:D#/Eb
        'd': 64, // d:E
        'f': 65, // f:F
        't': 66, // t:F#/Gb
        'g': 67, // g:G
        'y': 68, // y:G#/Ab
        'h': 69, // h:A
        'u': 70, // u:A#/Bb
        'j': 71, // j:B
        'k': 72  // k:C
      };

      _.each(_.keys(keyMap), function (key) {
        var freq = MidiUtil.mtof(keyMap[key]);

        keyboardJS.bind(key, function (e) {
          e.preventRepeat();
          keydown(freq);
        }, function (e) {
          keyup(freq);
        });
      });
    }

    function unbind() {
      keyboardJS.reset();
    }
  }

  return Factory;
});
