import { bindable } from 'aurelia-framework';

export class MdlTextfieldCustomElement {
  @bindable type = 'text';
  @bindable label;
  @bindable min = 0;
  @bindable max = 100;
  @bindable step = 1;
  @bindable value;

  bind() {
    if (this.type === 'number' && this.value === null) {
      this.value = (this.max - this.min) / 2 + this.min;
    }
  }
}
