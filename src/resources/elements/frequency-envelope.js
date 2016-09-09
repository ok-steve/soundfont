import { bindable, bindingMode } from 'aurelia-framework';

export class FrequencyEnvelopeCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model;
}

