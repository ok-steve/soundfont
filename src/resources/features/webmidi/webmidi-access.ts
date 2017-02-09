import { bindable, autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { toMessage } from '../../../lib/func/utilities';
import { requestMidiAccess } from '../../../lib/func/webmidi';

@autoinject
export class WebmidiAccessCustomElement {
  ea: EventAggregator;
  error: boolean;
  devices: Array<any>;
  activeDevice: any;

  @bindable type;

  constructor( ea: EventAggregator ) {
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
