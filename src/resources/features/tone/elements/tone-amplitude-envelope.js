import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { AmplitudeEnvelope } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneAmplitudeEnvelopeCustomElement {
  @bindable id;
  @bindable connect;
  @bindable attack = 0.005;
  @bindable decay = 0.1;
  @bindable sustain = 0.9;
  @bindable release = 1;

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
        attack: this.attack,
        decay: this.decay,
        sustain: this.sustain,
        release: this.release
      }
    };
  }
}
