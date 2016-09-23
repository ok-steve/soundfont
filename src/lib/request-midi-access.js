import 'web-midi-api';

export const requestMIDIAccess = () => {
  return new Promise(( resolve, reject ) => {
    if ( navigator['requestMIDIAccess'] !== undefined ) {
      navigator.requestMIDIAccess().then(access => {
        resolve( access );
      }).catch(error => {
        reject( error );
      });
    } else {
      reject( new Error('MIDI is not supported on this device.') );
    }
  });
};

export const inputs = requestMIDIAccess().then(access => {
  return access.inputs;
});

export const outputs = requestMIDIAccess().then(access => {
  return access.outputs;
});
