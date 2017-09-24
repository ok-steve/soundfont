import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

export const midiMessageEvent = input => {
  return Observable.fromEvent(input, 'midimessage');
};
