import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { AmplitudeEnvelope } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneAmplitudeEnvelopeCustomElement {
  @bindable id;
  @bindable connect;
  @bindable model;

  constructor( EventAggregator ) {
    this.ea = EventAggregator;
  }

  attached() {
    this.ea.publish( new AddNodeEvent( this.settings() ) );
  }

  settings() {
    return {
      id: this.id,
      type: 'envelope',
      connect: this.connect,
      constructor: AmplitudeEnvelope,
      defaults: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.9,
        release: 1
      }
    };
  }
}
