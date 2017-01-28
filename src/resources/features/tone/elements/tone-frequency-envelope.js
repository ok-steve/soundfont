import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { FrequencyEnvelope } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneFrequencyEnvelopeCustomElement {
  @bindable id;
  @bindable connect;
  @bindable attack;
  @bindable decay;
  @bindable sustain;
  @bindable release;
  @bindable baseFrequency = 200;
  @bindable octaves = 4;
  @bindable exponent = 2;

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
        attack: this.attack,
        decay: this.decay,
        sustain: this.sustain,
        release: this.release,
        baseFrequency: this.baseFrequency,
        octaves: this.octaves,
        exponent: this.exponent
      }
    };
  }
}
