import { inject } from 'aurelia-framework';

@inject( Element )
export class PianoRollCustomElement {
  constructor( element ) {
    this.element = element;
  }

  sendMessage( detail ) {
    const e =  new CustomEvent( 'midimessage', {
      bubbles: true,
      detail: detail
    } );

    this.element.dispatchEvent( e );
  }

  onMousedown( e ) {
    e.stopPropagation();

    const note = e.target.getAttribute('data-midi');

    this.sendMessage({
      status: 144,
      data: [note, 127]
    });
  }

  onMouseup( e ) {
    e.stopPropagation();

    const note = e.target.getAttribute('data-midi');

    this.sendMessage({
      status: 128,
      data: [note, 127]
    });
  }
}
