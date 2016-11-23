import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { MidiService } from '../services/midi-service';
import { OnmidimessageEvent } from '../events/onmidimessage';

@inject( EventAggregator, MidiService )
export class MidiSelectCustomElement {
  constructor( EventAggregator, MidiService ) {
    this.ea = EventAggregator;
    this.midi = MidiService;

    this.midi.request( 'inputs' ).then(devices => {
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

    this.activeDevice.onmidimessage = this.onMidimessage.bind( this );
  }

  onMidimessage( e ) {
    this.ea.publish( new OnmidimessageEvent( this.midi.toMessage( ...e.data ) ) );
  }
}
