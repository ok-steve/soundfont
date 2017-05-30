import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlSnackbarCustomElement {
  @bindable data;

  bind() {
    if (this.data) {
      this.show(data);
    }
  }

  dataChanged(newValue, oldValue) {
    this.show(newValue);
  }

  show(data) {
    this.snackbar.MaterialSnackbar.showSnackbar(data);
  }
}
