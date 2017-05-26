import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlTooltipCustomElement {
  @bindable for;
  @bindable large;
  @bindable position;

  classList = '';

  bind() {
    if (this.large !== null) {
      this.classList += ' mdl-tooltip--large';
    }

    if (this.position) {
      this.classList += ` mdl-tooltip--${this.position}`;
    }
  }
}
