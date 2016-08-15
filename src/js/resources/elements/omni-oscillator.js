import { bindable, bindingMode } from 'aurelia-framework';

export class OmniOscillatorCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model;

  types = [
    'sine',
    'square',
    'triangle',
    'sawtooth'
  ];
}
