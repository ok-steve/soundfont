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

  onNoteon(e) {
    e.stopPropagation();

    const el = e.target;
    const note = parseInt(el.getAttribute('data-note'), 10) + (12 * this.octave);

    el.classList.add('is-active');

    this.sendMessage({
      status: 144,
      data: [note, 127]
    });
  }

  onNoteoff(e) {
    e.stopPropagation();

    const el = e.target;
    const note = parseInt(el.getAttribute('data-note')) + (12 * this.octave);

    el.classList.remove('is-active');

    this.sendMessage({
      status: 128,
      data: [note, 127]
    });
  }
}
