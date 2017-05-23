import { bindable } from 'aurelia-framework';

export class ToneFilterCustomElement {
  @bindable frequency = 350;
  @bindable gain = 0;
  @bindable Q = 1;
  @bindable rolloff = -12;
  @bindable type = 'lowpass';

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
}
