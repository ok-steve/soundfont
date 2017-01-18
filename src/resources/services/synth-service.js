import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { PolySynthService } from '../tone/services/poly-synth';

import { mtof, vtog } from '../../lib/midi';

import { NOTE_ON, NOTE_OFF } from './midi-service';

import { OnmidimessageEvent } from '../events/onmidimessage';
import { SetSynthEvent } from '../events/set-synth';

import { nodeGraph } from '../node-graph';
import { MonoSynth } from '../mono-synth';

const defaults = Array.prototype.concat( ...nodeGraph.map(node => {
  return Object.keys( node.defaults ).map(key => {
    return `${node.id}.${key}`;
  });
}));

@inject( EventAggregator, PolySynthService )
export class SynthService {
  constructor( EventAggregator, PolySynthService ) {
    this.ea = EventAggregator;
    this.poly = PolySynthService;

    this.synth = this.poly.create( 10, MonoSynth, nodeGraph );

    this.boundOnMidimessage = this.onMidimessage.bind(this);

    this.ea.subscribe( OnmidimessageEvent, this.boundOnMidimessage );
    this.ea.subscribe( SetSynthEvent, this.set );
  }

  triggerAttack( freq, gain = 1 ) {
    this.synth.triggerAttack( freq, gain );
  }

  triggerRelease( freq ) {
    this.synth.triggerRelease( freq );
  }

  get( params = defaults ) {
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
