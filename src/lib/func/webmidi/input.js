import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { midiInputMap } from './input-map';

export const midiInput = key => {
  return midiInputMap.map(map => {
    return map.get(key);
  });
};
