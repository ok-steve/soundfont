import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlRadioCustomElement {
  @bindable checked = false;
  @bindable disabled;
  @bindable label;
  @bindable name;
  @bindable ripple;

  classList = '';

  bind() {
    if (ripple !== null) {
      classList += ' mdl-js-ripple-effect';
    }
  }
}
