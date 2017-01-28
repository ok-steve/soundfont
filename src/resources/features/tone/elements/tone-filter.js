import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { Filter } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneFilterCustomElement {
  @bindable id;
  @bindable connect;
  @bindable frequency = 350;
  @bindable gain = 0;
  @bindable Q = 1;
  @bindable rolloff = -12;
  @bindable type = 'lowpass';

  constructor( EventAggregator ) {
    this.ea = EventAggregator;
  }

  attached() {
    this.ea.publish( new AddNodeEvent( this.settings() ) );
  }

  settings() {
    return {
      id: this.id,
      type: 'filter',
      connect: this.connect,
      constructor: Filter,
      defaults: {
        Q: this.Q,
        type: this.type,
        rolloff: this.rolloff
      }
    };
  }

  types = [
    'lowpass',
    'highpass',
    'bandpass',
    'lowshelf',
    'highshelf',
    'notch',
    'allpass',
    'peaking'
  ];

  rolloffs = [
    -12,
    -24,
    -48,
    -96
  ];
}
