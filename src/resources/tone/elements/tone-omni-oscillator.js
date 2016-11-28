import { bindable } from 'aurelia-framework';

export class ToneOmniOscillatorCustomElement {
  @bindable model;

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];
}
