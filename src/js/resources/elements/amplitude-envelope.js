import { bindable, bindingMode } from 'aurelia-framework';
import { polySynth } from '../poly-synth';

export class AmplitudeEnvelopeCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) params;

  defaults = polySynth.get([
    'envelope.attack',
    'envelope.decay',
    'envelope.sustain',
    'envelope.release'
  ]).envelope;

  attached() {
    this.params = this.defaults;
  }
}

