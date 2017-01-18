import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { OmniOscillator } from 'tone';

import { AddNodeEvent } from '../events/add-node';

@inject( EventAggregator )
export class ToneOmniOscillatorCustomElement {
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
      type: 'oscillator',
      connect: this.connect,
      constructor: OmniOscillator,
      defaults: {
        type: 'square'
      }
    };
  }

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];
}
