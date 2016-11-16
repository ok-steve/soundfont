import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { inputs } from '../../lib/request-midi-access';
import { toArray } from '../../lib/underscore';

import { ONMIDIMESSAGE, MidiService } from '../services/midi-service';

@inject( EventAggregator, MidiService )
export class MidiSelectCustomElement {
  constructor( EventAggregator, MidiService ) {
    this.ea = EventAggregator;
    this.midi = MidiService;

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

    this.activeDevice.onmidimessage = this.onMidimessage.bind( this );
  }

  onMidimessage( e ) {
    this.ea.publish( ONMIDIMESSAGE, this.midi.toMessage( ...e.data ) );
  }
}
