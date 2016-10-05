import { inject } from 'aurelia-framework';

import { mtof, vtog } from '../../lib/midi';
import { inputs } from '../../lib/request-midi-access';
import { toArray } from '../../lib/underscore';

import { SynthService } from '../services/synth-service';

@inject( SynthService )
export class MidiSelectCustomElement {
  constructor( SynthService ) {
    this.synth = SynthService;

    inputs.then(devices => {
      this.hasMIDI = true;

      this.devices = toArray( devices );
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

    this.activeDevice.onmidimessage = this.onmidimessage.bind( this );
  }

  onmidimessage( e ) {
    const data = e.data,
      status = data[0],
      data1 = data[1],
      data2 = data[2];

    switch ( status ) {
      case 144:
        this.synth.triggerAttack( mtof( data1 ), vtog( data2 ) );
      break;

      case 128:
        this.synth.triggerRelease( mtof( data1 ) );
      break;

      case 176:
        this.synth.set({ data1: data2 });
      break;
    }
  }
}
