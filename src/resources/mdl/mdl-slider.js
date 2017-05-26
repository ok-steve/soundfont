import { bindable } from 'aurelia-framework';

export class MdlSliderCustomElement {
  @bindable min = 0;
  @bindable max = 100;
  @bindable step = 1;
  @bindable value;

  bind() {
    if (this.value === null) {
      this.value = (this.max - this.min) / 2 + this.min;
    }
  }

  valueChanged(newValue, oldValue) {
    this.slider.MaterialSlider.change(newValue);

    if (this.value === this.slider.value && newValue != oldValue) {
      const e = new Event('change', {
        bubbles: true
      });

      this.slider.dispatchEvent(e);
    }
  }
}
