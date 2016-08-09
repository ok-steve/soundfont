import { polySynth } from '../resources/poly-synth';
import { bind, unbind } from '../resources/keyboard-input';

export class Index {
  constructor() {
    bind( this.start, this.stop );
  }

  start( freq ) {
    polySynth.triggerAttack( freq );
  }

  stop( freq ) {
    polySynth.triggerRelease( freq );
  }

  canDeactivate() {
    unbind();
  }
}
