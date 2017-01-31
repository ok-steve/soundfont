import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { PolySynth, MonoSynth } from 'tone';

import { NOTE_ON, NOTE_OFF, mtof, vtog } from '../../lib/midi';
import { OnmidimessageEvent } from '../events/onmidimessage';

@inject( EventAggregator )
export class SynthService {
  constructor( EventAggregator ) {
    this.ea = EventAggregator;
    this.synth = new PolySynth( 10, MonoSynth ).toMaster();

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
