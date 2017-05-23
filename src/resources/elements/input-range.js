import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class InputRangeCustomElement {
  @bindable label;
  @bindable min = 0;
  @bindable max = 100;
  @bindable step = 1;
  @bindable value;

  bind() {
    if ( !this.value ) {
      this.value = (this.max - this.min) / 2 + this.min;
    }
  }
}
