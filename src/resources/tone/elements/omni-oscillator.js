import { bindable } from 'aurelia-framework';

export class OmniOscillatorCustomElement {
  @bindable model;

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];
}
