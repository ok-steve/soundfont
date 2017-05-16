import { bindable } from 'aurelia-framework';

export class MdlSliderCustomElement {
  @bindable min = 0;
  @bindable max = 100;
  @bindable value; // min + (max - min) / 2
  @bindable step = 1;
}
