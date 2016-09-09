import 'web-midi-api';

import { toArray } from './underscore';

export const requestMIDIAccess = ( key ) => {
  return new Promise(( resolve, reject ) => {
    if ( navigator['requestMIDIAccess'] !== undefined ) {
      navigator.requestMIDIAccess().then(access => {
        const devices = toArray( access[key] );

        resolve( devices );
      }).catch(error => {
        reject( error );
      });
    } else {
      console.log( 'MIDI is not supported on this device.' );
    }
  });
};
