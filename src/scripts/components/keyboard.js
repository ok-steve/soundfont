import { merge } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';
import withLatestFrom from '../lib/Observable/withLatestFrom';

import { toMessage, pitchToMIDI } from '../lib/Util';
import setOctave from '../actions/setOctave';
import store, { dispatch } from '../store';

const KEYS = 'awsedftgyhujk';
const OCTAVE_KEYS = 'zx';

const includes = list => e => list.includes(e.key.toLowerCase());

const octaveStore = distinctUntilChanged(store.map(state => state.octave));

const toNote = ([e, octave]) => {
  const index = KEYS.indexOf(e.key.toLowerCase());
  const note = pitchToMIDI((e.shiftKey ? octave + 1 : octave), index);

  return note;
};

const keydown = fromEvent(document, 'keydown').filter(e => !e.repeat);
const keyup = fromEvent(document, 'keyup');

const noteon = withLatestFrom(keydown.filter(includes(KEYS)), octaveStore)
  .map(toNote).map(note => toMessage(144, note));

const noteoff = withLatestFrom(keyup.filter(includes(KEYS)), octaveStore)
  .map(toNote).map(note => toMessage(128, note));

const octavechange = keyup.filter(includes(OCTAVE_KEYS));

const keyboard = merge(
  noteon,
  noteoff,
);

withLatestFrom(octavechange, octaveStore).subscribe(([e, octave]) => {
  dispatch(setOctave(e.key.toLowerCase() === 'z' ? octave - 1 : octave + 1));
});

export default keyboard;
