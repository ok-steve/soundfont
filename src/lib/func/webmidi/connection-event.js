import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

export const midiConnectionEvent = access => {
  return Observable.fromEvent(access, 'statechange');
};
