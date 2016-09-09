import { bindable, bindingMode } from 'aurelia-framework';

export class InputRangeCustomElement {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable min = 0;
  @bindable max = 100;
  @bindable step = 1;
  @bindable label;
  @bindable id;
}
