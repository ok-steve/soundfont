import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { FrequencyEnvelope } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneFrequencyEnvelopeCustomElement {
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
      constructor: FrequencyEnvelope,
      defaults: {
        attack: 0.06,
        decay: 0.2,
        sustain: 0.5,
        release: 2,
        baseFrequency: 200,
        octaves: 7,
        exponent: 2
      }
    };
  }
}
