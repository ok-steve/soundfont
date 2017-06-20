import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

export const midiConnectionEvent = (access: WebMidi.MIDIAccess): Observable<WebMidi.MIDIConnectionEvent> => {
  return Observable.fromEvent(access, 'statechange');
};
