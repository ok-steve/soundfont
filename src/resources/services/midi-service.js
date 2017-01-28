import 'web-midi-api';

export class MidiService {
  request( type ) {
    return new Promise(( resolve, reject ) => {
      if ( navigator['requestMIDIAccess'] !== undefined ) {
        navigator.requestMIDIAccess().then(access => {
          return access[type];
        }).then(deviceMap => {
          const devices = [];

          for ( let device of deviceMap.values() ) {
            devices.push( device );
          }

          resolve( devices );
        }).catch(err => {
          reject( err );
        });
      } else {
        reject( Error('MIDI is not supported on this device.') );
      }
    });
  }
}
