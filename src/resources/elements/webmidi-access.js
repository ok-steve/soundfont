import { bindable, inject } from 'aurelia-framework';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';

const request = () => {
  if (navigator['requestMIDIAccess'] === undefined) {
    return Promise.reject(new Error('MIDI is not supported on this device'));
  }

  return navigator.requestMIDIAccess();
}

const requestAccess = Observable.fromPromise(request());

@inject(Element)
export class WebmidiAccessCustomElement {
  @bindable type;

  constructor(element) {
    this.element = element;

    this.boundOnMidimessage = this.onMidimessage.bind(this);

    Observable.merge(
      requestAccess,
      requestAccess.mergeMap(access => Observable.fromEvent(access, 'statechange'))
   ).subscribe(access => {
      this.devices = new Map(access[this.type]);
    }, err => {
      this.error = true;

      console.log(err.message);
    });
  }

  onChange(e) {
    e.stopPropagation();

    this.devices.forEach(device => {
      if (device.onmidimessage !== null) {
        device.onmidimessage = null;
      }
    });

    this.activeDevice.onmidimessage = this.boundOnMidimessage;
  }

  onMidimessage(e) {
    const ce = new CustomEvent('midimessage', {
      bubbles: true,
      detail: {
        status: e.data[0],
        data: [e.data[1], e.data[2]]
      }
    });

    this.element.dispatchEvent(ce);
  }
}
