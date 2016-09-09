import 'web-midi-api';

export function request( key ) {
  return new Promise(( resolve, reject ) => {
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
