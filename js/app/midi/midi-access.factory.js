define([
  'webmidi'
], function () {
  'use strict';

  Factory.$inject = [
    '$q'
  ];

  function Factory($q) {
    var factory = {
      request: request
    };

    return factory;

    ///////////////

    function request(key) {
      return $q(function (resolve, reject) {
        if (navigator['requestMIDIAccess'] !== undefined) {
          navigator.requestMIDIAccess().then(function (access) {
            var iter = access[key].values(),
              devices = [];

            for (let item = iter.next(); item && !item.done; item = iter.next()) {
              devices.push(item.value);
            }

            resolve(devices);
          }).catch(function (error) {
            reject(error);
          });
        } else {
          console.log('MIDI is not supported on this device.');
        }
      });
    }
  }

  return Factory;
});
