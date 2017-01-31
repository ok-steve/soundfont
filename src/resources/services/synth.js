import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { PolySynthService } from '../features/tone/services/poly-synth';

import { NOTE_ON, NOTE_OFF, mtof, vtog } from '../../lib/midi';
import { OnmidimessageEvent } from '../events/onmidimessage';

import { MonoSynth } from '../mono-synth';

@inject( EventAggregator, PolySynthService )
export class SynthService {
  constructor( EventAggregator, PolySynthService ) {
    this.ea = EventAggregator;
    this.poly = PolySynthService;

    this.graph = [];
    this.synth = this.create();

    this.boundOnMidimessage = this.onMidimessage.bind(this);

    this.ea.subscribe( OnmidimessageEvent, this.boundOnMidimessage );
  }

  triggerAttack( freq, gain = 1 ) {
    this.synth.triggerAttack( freq, gain );
  }

  triggerRelease( freq ) {
    this.synth.triggerRelease( freq );
  }

  get( params ) {
    return this.synth.get( params );
  }

  set( params ) {
    this.synth.set( params );
  }

  create() {
    return this.poly.create( 10, MonoSynth, this.graph );
  }

  onMidimessage( e ) {
    const message = e.data;

    switch( message.status ) {
      case NOTE_ON:
        this.triggerAttack( mtof( message.data[0] ), vtog( message.data[1] ) );
        break;

      case NOTE_OFF:
        this.triggerRelease( mtof( message.data[0] ) );
        break;
    }
  }
}
