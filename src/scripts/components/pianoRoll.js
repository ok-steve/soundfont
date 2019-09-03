import { merge } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import withLatestFrom from '../lib/Observable/withLatestFrom';
import { pitchToMIDI } from '../lib/Util';
import toMessage from '../lib/toMessage';
import octave from './octave';

const el = document.querySelector('.piano-roll');

const isSpaceOrEnter = keyCode => keyCode === 32 || keyCode === 13;

const toNote = ([e, oct]) => pitchToMIDI(oct, parseInt(e.target.dataset.note, 10));

const noteon = merge(
  fromEvent(el, 'mousedown'),
  fromEvent(el, 'touchstart'),
  fromEvent(el, 'keydown')
    .filter(e => !e.repeat)
    .filter(e => isSpaceOrEnter(e.keyCode)),
);

const noteoff = merge(
  fromEvent(el, 'mouseup'),
  fromEvent(el, 'touchend'),
  fromEvent(el, 'keyup').filter(e => isSpaceOrEnter(e.keyCode)),
);

const pianoRoll = merge(
  withLatestFrom(noteon, octave)
    .map(toNote)
    .map((note) => toMessage(144, note, 127)),
  withLatestFrom(noteoff, octave)
    .map(toNote)
    .map((note) => toMessage(128, note, 0)),
);

export default pianoRoll;

noteon.subscribe((e) => {
  e.preventDefault();
  e.target.setAttribute('aria-pressed', 'true');
});

noteoff.subscribe((e) => {
  e.preventDefault();
  e.target.setAttribute('aria-pressed', 'false');
});
