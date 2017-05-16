import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlTextfieldCustomElement {
  @bindable type = 'text';
  @bindable value;
  @bindable label;
  @bindable min;
  @bindable max;
  @bindable step;
}
