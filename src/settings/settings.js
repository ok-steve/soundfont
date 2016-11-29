import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { SynthService } from '../resources/services/synth-service';
import { SetSynthEvent } from '../resources/events/set-synth';

@inject( EventAggregator, SynthService )
export class Settings {
  constructor( EventAggregator, SynthService ) {
    this.ea = EventAggregator;
    this.synth = SynthService;

    this.params = this.synth.get();

    this.ea.subscribe( SetSynthEvent, e => {
      this.params = e.message;
    });
  }

  onChange( e ) {
    this.ea.publish( new SetSynthEvent( this.params ) );
  }
}
