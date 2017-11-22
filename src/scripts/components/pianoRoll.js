import { toMessage, pitchToMIDI } from '../lib/Util';
import fromEvent from '../lib/fromEvent';
import merge from '../lib/merge';
import store from '../store';

const el = document.querySelector('.piano-roll');

const isSpaceOrEnter = keyCode => keyCode === 32 || keyCode === 13;

const toNote = (e) => {
  const { octave } = store.getState();

  return pitchToMIDI(octave, parseInt(e.target.dataset.note, 10));
};

const noteon = merge(
  fromEvent(el, 'mousedown'),
  fromEvent(el, 'touchstart'),
  fromEvent(el, 'keydown').filter(e => !e.repeat).filter(e => isSpaceOrEnter(e.keyCode)),
);

const noteoff = merge(
  fromEvent(el, 'mouseup'),
  fromEvent(el, 'touchend'),
  fromEvent(el, 'keyup').filter(e => isSpaceOrEnter(e.keyCode)),
);

const pianoRoll = merge(
  noteon.map(toNote).map(note => toMessage(144, note)),
  noteoff.map(toNote).map(note => toMessage(128, note)),
);

export default pianoRoll;

noteon.subscribe((e) => {
  e.preventDefault();
  e.target.classList.add('is-pressed');
});

noteoff.subscribe((e) => {
  e.preventDefault();
  e.target.classList.remove('is-pressed');
});
