import { bindable } from 'aurelia-framework';

import 'tone';

export class ToneAmplitudeEnvelopeCustomElement {
  @bindable attack;
  @bindable decay;
  @bindable sustain;
  @bindable release;
}
