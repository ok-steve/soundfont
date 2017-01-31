import { bindable, autoinject } from 'aurelia-framework';

import { WebmidiService } from '../services/webmidi';

@autoinject
export class WebmidiAccessCustomElement {
  midi: WebmidiService;
  error: boolean;
  devices: Array<any>;
  activeDevice: any;

  @bindable type;
  @bindable midimessage;

  constructor( midi: WebmidiService ) {
    this.midi = midi;

    this.midi.requestMidiAccess().then(access => {
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

    this.activeDevice.onmidimessage = this.midimessage;
  }
}
