import { bindable, bindingMode } from 'aurelia-framework';
import { polySynth } from '../poly-synth';

export class OmniOscillatorCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) params;

  defaults = polySynth.get([
    'oscillator.type'
  ]).oscillator;

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];

  attached() {
    this.params = this.defaults;
  }
}
