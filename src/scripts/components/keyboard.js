import { merge } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import withLatestFrom from '../lib/Observable/withLatestFrom';
import { pitchToMIDI } from '../lib/Util';
import toMessage from '../lib/toMessage';
import octave from './octave';

const KEYS = 'awsedftgyhujk';

const includes = list => e => list.includes(e.key.toLowerCase());

const toNote = ([e, oct]) => {
  const index = KEYS.indexOf(e.key.toLowerCase());
  const note = pitchToMIDI(e.shiftKey ? oct + 1 : oct, index);

  return note;
};

const keydown = fromEvent(document, 'keydown').filter(e => !e.repeat);
const keyup = fromEvent(document, 'keyup');

const noteon = withLatestFrom(keydown.filter(includes(KEYS)), octave)
  .map(toNote)
  .map((note) => toMessage(144, note, 127));

const noteoff = withLatestFrom(keyup.filter(includes(KEYS)), octave)
  .map(toNote)
  .map((note) => toMessage(128, note, 0));

const keyboard = merge(noteon, noteoff);

export default keyboard;
