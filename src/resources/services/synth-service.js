import { PolySynth } from 'tone';

import { MonoSynth } from '../mono-synth';

const polySynth = new PolySynth( 10, MonoSynth ).toMaster();

export class SynthService {
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
}
