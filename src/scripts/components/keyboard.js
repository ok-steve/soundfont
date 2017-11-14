import { toMessage } from '../lib/util';
import { fromEvent, merge } from '../lib/observable';
import { store } from '../store';

const KEYS = 'awsedftgyhujk';

const includes = list => e => list.includes(e.key.toLowerCase());

const toNote = e => {
  const { octave } = store.getState();
  const index = KEYS.indexOf(e.key.toLowerCase());
  const note = (12 * (e.shiftKey ? octave + 1 : octave)) + index;

  return note;
};

const keydown = fromEvent(document, 'keydown').filter(e => !e.repeat);
const keyup = fromEvent(document, 'keyup');

const noteon = keydown.filter(includes(KEYS)).map(toNote).map(note => {
  return toMessage(144, note);
});

const noteoff = keyup.filter(includes(KEYS)).map(toNote).map(note => {
  return toMessage(128, note);
});
