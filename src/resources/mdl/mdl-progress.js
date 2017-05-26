import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdlProgressCustomElement {
  @bindable buffer;
  @bindable indeterminate;
  @bindable value;

  classList = '';

  bind() {
    if (this.value) {
      this.setProgress(this.value);
    }

    if (this.indeterminate !== null) {
      this.classList += ' mdl-progress_indeterminate';
    }

    if (this.buffer) {
      this.setBuffer(this.buffer);
    }
  }

  bufferChanged(newValue, oldValue) {
    this.setBuffer(newValue);
  }

  valueChanged(newValue, oldValue) {
    this.setProgress(newValue);
  }

  setBuffer(value) {
    this.progress.MaterialProgress.setBuffer(value);
  }

  setProgress(value) {
    this.progress.MaterialProgress.setProgress(value);
  }
}
