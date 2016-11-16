import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { PolySynth } from 'tone';

import { mtof, vtog } from '../../lib/midi'

import { NOTE_ON, NOTE_OFF, ONMIDIMESSAGE } from './midi-service';

import { MonoSynth } from '../mono-synth';

const polySynth = new PolySynth( 10, MonoSynth ).toMaster();

export const SET_SYNTH = 'SET_SYNTH';

@inject( EventAggregator )
export class SynthService {
  constructor( EventAggregator, MidiService ) {
    this.ea = EventAggregator;

    this.ea.subscribe( ONMIDIMESSAGE, this.onMidimessage );
    this.ea.subscribe( SET_SYNTH, this.set );
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

  onMidimessage( message ) {
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
