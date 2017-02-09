import { autoinject } from 'aurelia-framework';

import 'material-design-lite';

@autoinject
export class MdlJsCustomAttribute {
  element: Element;

  constructor( element: Element ) {
    this.element = element;
  }

  attached() {
    componentHandler.upgradeElement( this.element );
  }
}
