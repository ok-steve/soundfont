import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { SetSynthEvent } from '../resources/events/set-synth';

@inject( EventAggregator )
export class Settings {
  constructor( EventAggregator ) {
    this.ea = EventAggregator;

    this.params = {};
  }

  onChange( e ) {
    this.ea.publish( new SetSynthEvent( this.params ) );
  }
}
