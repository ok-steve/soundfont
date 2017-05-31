import { bindable } from 'aurelia-framework';

export class InputRangeCustomElement {
  @bindable id;
  @bindable label;
  @bindable min = 0;
  @bindable max = 100;
  @bindable step = 1;
  @bindable value;

  bind() {
    if (this.value === null) {
      this.value = (this.max - this.min) / 2 + this.min;
    }
  }
}
