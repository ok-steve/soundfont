import { bindable, inject } from 'aurelia-framework';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';

import { requestMidiAccess } from '../../lib/func/webmidi';

const request = Observable.fromEvent( requestMidiAccess() );

@inject( Element )
export class WebmidiAccessCustomElement {
  @bindable type;

  constructor( element ) {
    this.element = element;

    this.boundOnMidimessage = this.onMidimessage.bind(this);

    Observable.merge(
      request,
      request.mergeMap(access => Observable.fromEvent( access, 'statechange' ))
    ).subscribe(access => {
      this.devices = new Map( access[this.type] );
    }, err => {
      this.error = true;

      console.log( err.message );
    });
  }

  onChange( e ) {
    e.stopPropagation();

    this.devices.forEach(device => {
      if ( device.onmidimessage !== null ) {
        device.onmidimessage = null;
      }
    });

    this.activeDevice.onmidimessage = this.boundOnMidimessage;
  }

  onMidimessage( e ) {
    const ce = new CustomEvent( 'midimessage', {
      bubbles: true,
      detail: {
        status: e.data[0],
        data: [e.data[1], e.data[2]]
      }
    } );

    this.element.dispatchEvent( ce );
  }
}
