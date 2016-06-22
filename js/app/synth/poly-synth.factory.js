define([], function () {
  'use strict';

  Factory.$inject = ['synthDef'];

  function Factory(synthDef) {
    var factory = {
        noteOn: noteOn,
        noteOff: noteOff
      },
      voices = {};

    return factory;

    ///////////////

    function noteOn(freq, gain) {
      var voice = synthDef.init(),
        key = Math.floor(freq);

      voices[key] = voice;
      synthDef.start(voice, freq, gain);
    }

    function noteOff(freq) {
      var key = Math.floor(freq);

      synthDef.stop(voices[key]);
      delete voices[key];
    }
  }

  return Factory;
});
