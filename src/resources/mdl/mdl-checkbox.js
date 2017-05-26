import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlCheckboxCustomElement {
  @bindable checked = false;
  @bindable disabled;
  @bindable id;
  @bindable label;
  @bindable ripple;

  classList = '';

  bind() {
    if (ripple !== null) {
      classList += ' mdl-js-ripple-effect';
    }
  }
}
