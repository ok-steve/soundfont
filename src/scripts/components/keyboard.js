import { fromEvent, merge } from '../lib/Observable';

import { toMessage, pitchToMIDI } from '../lib/Util';
import setOctave from '../actions/setOctave';
import store, { dispatch } from '../store';

const KEYS = 'awsedftgyhujk';
const OCTAVE_KEYS = 'zx';

const includes = list => e => list.includes(e.key.toLowerCase());

const octaveStore = store.map(state => state.octave).distinctUntilChanged();

const toNote = ([e, octave]) => {
  const index = KEYS.indexOf(e.key.toLowerCase());
  const note = pitchToMIDI((e.shiftKey ? octave + 1 : octave), index);

  return note;
};

const keydown = fromEvent(document, 'keydown').filter(e => !e.repeat);
const keyup = fromEvent(document, 'keyup');

const noteon = keydown.filter(includes(KEYS)).withLatestFrom(octaveStore)
  .map(toNote).map(note => toMessage(144, note));

const noteoff = keyup.filter(includes(KEYS)).withLatestFrom(octaveStore)
  .map(toNote).map(note => toMessage(128, note));

const octavechange = keyup.filter(includes(OCTAVE_KEYS));

const keyboard = merge(
  noteon,
  noteoff,
);

octavechange.withLatestFrom(octaveStore).subscribe(([e, octave]) => {
  dispatch(setOctave(e.key.toLowerCase() === 'z' ? octave - 1 : octave + 1));
});

export default keyboard;
