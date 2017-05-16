import { Synth, PolySynth } from 'tone';

export class SynthService {
  constructor() {
    this.synth = new PolySynth( 10, Synth ).toMaster();
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
}
