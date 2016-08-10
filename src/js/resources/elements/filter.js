import { bindable, bindingMode } from 'aurelia-framework';
import { polySynth } from '../poly-synth';

export class FilterCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) params;

  defaults = polySynth.get([
    'filter.Q',
    'filter.type',
    'filter.rolloff'
  ]).filter;

  types = [
    'lowpass',
    'highpass',
    'bandpass',
    'lowshelf',
    'highshelf',
    'notch',
    'allpass',
    'peaking'
  ];

  rolloffs = [
    -12,
    -24,
    -48,
    -96
  ];

  attached() {
    this.params = this.defaults;
  }
}
