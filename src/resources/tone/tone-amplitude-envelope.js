import { bindable } from 'aurelia-framework';

export class ToneAmplitudeEnvelopeCustomElement {
  @bindable attack;
  @bindable decay;
  @bindable sustain;
  @bindable release;
}
