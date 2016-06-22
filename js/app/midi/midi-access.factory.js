define([
  'algorhythms/core/midi-access'
], function (MidiAccess) {
  'use strict';

  Factory.$inject = ['$q'];

  function Factory($q) {
    var factory = {
      connect: connect,
      getInputs: MidiAccess().getInputs
    };

    return factory;

    ///////////////

    function connect() {
      // NOTE regular promise doesn't work module calls the function
      return $q(function (resolve, reject) {
        // FIXME don't cause error when MIDI access doesn't exist
        MidiAccess().connect().then(function (access) {
          resolve(access);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }

  return Factory;
});
