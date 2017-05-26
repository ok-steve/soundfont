import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlCardCustomElement {
  @bindable shadow;

  classList = '';

  bind() {
    if (this.shadow) {
      this.classList += ` mdl-shadow--${this.shadow}dp`;
    }
  }
}
