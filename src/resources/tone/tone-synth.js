import { bindable } from 'aurelia-framework';

export class ToneSynthCustomElement {
  @bindable frequency = 'C4';
  @bindable detune = 0;

  @bindable oscillator = {
    type: 'square'
  };

  @bindable envelope = {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.9,
    release: 1
  };
}
