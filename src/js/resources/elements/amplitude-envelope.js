import { bindable, bindingMode } from 'aurelia-framework';

export class AmplitudeEnvelopeCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) model;
}

