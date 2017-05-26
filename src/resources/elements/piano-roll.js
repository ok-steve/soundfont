import { bindable, inject } from 'aurelia-framework';

@inject(Element)
export class PianoRollCustomElement {
  @bindable octave = 4;

  constructor(element) {
    this.element = element;
  }

  sendMessage(detail) {
    const e =  new CustomEvent('midimessage', {
      bubbles: true,
      detail: detail
    });

    this.element.dispatchEvent(e);
  }

  onMousedown(e) {
    e.stopPropagation();

    const el = e.target;
    const note = el.getAttribute('data-note') + (12 * this.octave);

    this.sendMessage({
      status: 144,
      data: [note, 127]
    });
  }

  onMouseup(e) {
    e.stopPropagation();

    const el = e.target;
    const note = el.getAttribute('data-note') + (12 * this.octave);

    this.sendMessage({
      status: 128,
      data: [note, 127]
    });
  }
}
