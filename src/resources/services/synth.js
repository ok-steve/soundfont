import { SoundfontSampler } from '../../lib/soundfont-sampler';

export class SynthService {
  constructor() {
    this.synth = new SoundfontSampler().toMaster();
  }

  triggerAttack( freq, gain = 1 ) {
    this.synth.triggerAttack( freq, 0, gain );
  }

  triggerRelease( freq ) {
    this.synth.triggerRelease( freq, 0 );
  }

  get( params ) {
    return this.synth.get( params );
  }

  set( params ) {
    this.synth.set( params );
  }
}
