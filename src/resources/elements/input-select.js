import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class InputSelectCustomElement {
  @bindable label;
  @bindable options;
  @bindable value;
}
