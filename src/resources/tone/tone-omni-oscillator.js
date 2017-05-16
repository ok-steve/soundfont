import { bindable } from 'aurelia-framework';

export class ToneOmniOscillatorCustomElement {
  @bindable frequency = 440;
  @bindable detune = 0;
  @bindable type = 'sine';
  @bindable phase = 0;

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];
}
