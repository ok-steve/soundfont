import { inject } from 'aurelia-framework';

import 'material-design-lite';

@inject( Element )
export class MdlJsCustomAttribute {
  constructor( element ) {
    this.element = element;
  }

  attached() {
    componentHandler.upgradeElement( this.element );
  }
}
