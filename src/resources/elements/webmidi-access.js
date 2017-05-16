import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { toMessage } from '../../lib/func/utilities';
import { requestMidiAccess } from '../../lib/func/webmidi';

@inject( EventAggregator )
export class WebmidiAccessCustomElement {
  @bindable type;

  constructor( ea ) {
    this.ea = ea;

    requestMidiAccess().then(access => {
      access.onstatechange = e => {
        this.devices = Array.from( e.target[this.type].values() );
      };

      return access[this.type];
    }).then(devices => {
      this.devices = Array.from( devices.values() );
    }).catch(err => {
      this.error = true;

      console.log( err.message );
    });
  }

  onChange( e ) {
    this.devices.map(device => {
      if ( device.onmidimessage !== null ) {
        device.onmidimessage = null;
      }

      return device;
    });

    this.activeDevice.onmidimessage = e => {
      this.ea.publish( 'midimessage', toMessage( ...e.data ) );
    };
  }
}
