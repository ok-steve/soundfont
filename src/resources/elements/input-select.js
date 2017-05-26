import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class InputSelectCustomElement {
  @bindable id;
  @bindable label;
  @bindable options;
  @bindable value;
}
