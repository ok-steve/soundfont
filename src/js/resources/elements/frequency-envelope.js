import { bindable, bindingMode } from 'aurelia-framework';
import { polySynth } from '../poly-synth';

export class FrequencyEnvelopeCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) params;

  defaults = polySynth.get([
    'filterEnvelope.attack',
    'filterEnvelope.decay',
    'filterEnvelope.sustain',
    'filterEnvelope.release',
    'filterEnvelope.baseFrequency',
    'filterEnvelope.octaves',
    'filterEnvelope.exponent'
  ]).filterEnvelope;

  attached() {
    this.params = this.defaults;
  }
}

