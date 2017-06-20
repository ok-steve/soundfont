import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { midiInputMap } from './input-map';

export const midiInput = (key: string): Observable<WebMidi.MIDIInput> => {
  return midiInputMap.map((map: WebMidi.MIDIInputMap): WebMidi.MIDIInput | undefined => {
    return map.get(key);
  });
};
