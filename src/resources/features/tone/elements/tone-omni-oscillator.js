import { bindable } from 'aurelia-framework';

import { OmniOscillator } from 'tone';

export class ToneOmniOscillatorCustomElement {
  @bindable frequenc = 440;
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
