import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { midiAccess } from './access';

export const midiInputMap = midiAccess.map((access: WebMidi.MIDIAccess): WebMidi.MIDIInputMap => {
  return access.inputs;
});
