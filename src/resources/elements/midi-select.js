import { requestMIDIAccess } from '../../lib/midi-access';
import { mtof, vtog } from '../../lib/midi';
import { polySynth } from '../poly-synth';

export class MidiSelectCustomElement {
  constructor() {
    requestMIDIAccess('inputs').then(devices => {
      this.hasMIDI = true;

      this.devices = devices;
    }).catch(error => {
      this.error = true;

      console.log( error.message );
    });
  }

  onChange() {
    this.devices.map(device => {
      if ( device.onmidimessage !== null ) {
        device.onmidimessage = null;
      }

      return device;
    });

    this.activeDevice.onmidimessage = this.onmidimessage;
  }

  onmidimessage( e ) {
    const data = e.data,
      status = data[0],
      data1 = data[1],
      data2 = data[2];

    switch ( status ) {
      case 144: // noteOn
        polySynth.triggerAttack( mtof( data1 ), vtog( data2 ) );
      break;

      case 128: // noteOff
        polySynth.triggerRelease( mtof( data1 ) );
      break;

      case 176: // control
        console.log( data );
      break;
    }
  }
}
