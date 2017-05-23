import { bindable } from 'aurelia-framework';

export class ToneFrequencyEnvelopeCustomElement {
  @bindable attack;
  @bindable decay;
  @bindable sustain;
  @bindable release;
  @bindable baseFrequency = 200;
  @bindable octaves = 4;
  @bindable exponent = 2;
}
