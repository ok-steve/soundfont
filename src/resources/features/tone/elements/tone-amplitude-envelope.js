import { bindable } from 'aurelia-framework';

import { AmplitudeEnvelope } from 'tone';

export class ToneAmplitudeEnvelopeCustomElement {
  @bindable attack;
  @bindable decay;
  @bindable sustain;
  @bindable release;
}
