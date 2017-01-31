import 'web-midi-api';

export class WebmidiService {
  requestMidiAccess(): any {
    return new Promise(( resolve, reject ) => {
      if ( navigator['requestMIDIAccess'] !== undefined ) {
        navigator.requestMIDIAccess().then(access => {
          resolve( access );
        }).catch(err => {
          reject( err );
        });
      } else {
        reject( new Error('MIDI is not supported on this device') );
      }
    });
  }
}
