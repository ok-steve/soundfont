import { bindable, inject } from 'aurelia-framework';

import { WebmidiService } from '../services/webmidi';

@inject( WebmidiService )
export class WebmidiAccessCustomElement {
  @bindable type;
  @bindable midimessage;

  constructor( WebmidiService ) {
    this.midi = WebmidiService;

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
