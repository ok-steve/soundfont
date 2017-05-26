import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlMenuCustomElement {
  @bindable id;
  @bindable items;
}
