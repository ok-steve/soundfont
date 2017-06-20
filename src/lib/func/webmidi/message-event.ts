import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

export const midiMessageEvent = (input: WebMidi.MIDIInput): Observable<WebMidi.MIDIMessageEvent> => {
  return Observable.fromEvent(input, 'midimessage');
};
