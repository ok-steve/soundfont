import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { PolySynth } from 'tone';

import { mtof, vtog } from '../../lib/midi'

import { NOTE_ON, NOTE_OFF } from './midi-service';
import { OnmidimessageEvent } from '../events/onmidimessage';
import { SetSynthEvent } from '../events/set-synth';

import { MonoSynth } from '../mono-synth';

const polySynth = new PolySynth( 10, MonoSynth ).toMaster();

@inject( EventAggregator )
export class SynthService {
  constructor( EventAggregator ) {
    this.ea = EventAggregator;

    this.boundOnMidimessage = this.onMidimessage.bind( this );

    this.ea.subscribe( OnmidimessageEvent, this.boundOnMidimessage );
    this.ea.subscribe( SetSynthEvent, this.set );
  }

  triggerAttack( freq, gain = 1 ) {
    polySynth.triggerAttack( freq, gain );
  }

  triggerRelease( freq ) {
    polySynth.triggerRelease( freq );
  }

  get( params ) {
    return polySynth.get( params );
  }

  set( params ) {
    polySynth.set( params );
  }

  onMidimessage( e ) {
    const message = e.message;

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
