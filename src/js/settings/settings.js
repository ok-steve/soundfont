import { polySynth } from '../resources/poly-synth';

export class Settings {
  onChange() {
    polySynth.set( this.params );
  }
}
