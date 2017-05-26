import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlSpinnerCustomElement {
  @bindable color;

  classList = '';

  bind() {
    if (this.color === null) {
      this.classList += ' mdl-spinner--single-color';
    }
  }
}
