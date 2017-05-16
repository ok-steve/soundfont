import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlCardCustomElement {
  @bindable shadow; // 2-16, evens

  bind() {
    if ( this.shadow ) {
      this.classList += ` mdl-shadow--${this.shadow}dp`;
    }
  }
}
