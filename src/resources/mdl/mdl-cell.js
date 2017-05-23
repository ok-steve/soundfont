import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlCellCustomElement {
  @bindable col;

  bind() {
    if ( this.col ) {
      this.classList += ` mdl-cell--${this.col}-col`;
    }
  }
}
