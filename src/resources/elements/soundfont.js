import { bindable } from 'aurelia-framework';

import { GM } from '../../lib/general-midi';

export class SoundfontCustomElement {
  @bindable type = 'acoustic_grand_piano';

  types = GM.map(instrument => {
    return instrument.category;
  }).filter(( category, i, arr ) => {
    return arr.indexOf( category ) === i;
  }).reduce(( acc, curr ) => {
    const instrumentsInCategory = GM.filter(instrument => {
      return instrument.category === curr;
    });

    return acc.set( curr, new Set( instrumentsInCategory ) );
  }, new Map() );
}
