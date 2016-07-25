'use strict';

import 'web-midi-api;


export default function MidiAccessFactory( $q ) {
  const factory = {
    request: request
  };

  return factory;

  ///////////////

  function request( key ) {
    return $q(( resolve, reject ) => {
      if ( navigator['requestMIDIAccess'] !== undefined ) {
        navigator.requestMIDIAccess().then(access => {
          const iter = access[key].values(),
            devices = [];

          for ( let item = iter.next(); item && !item.done; item = iter.next() ) {
            devices.push( item.value );
          }

          resolve( devices );
        }).catch(error => {
          reject( error );
        });
      } else {
        console.log( 'MIDI is not supported on this device.' );
      }
    });
  }
}

MidiAccessFactory.$inject = [
  '$q'
];

