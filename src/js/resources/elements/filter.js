import { bindable, bindingMode } from 'aurelia-framework';

export class FilterCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model;

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
