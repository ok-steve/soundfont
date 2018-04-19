import { merge } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import withLatestFrom from '../lib/Observable/withLatestFrom';
import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';
import { toMessage, pitchToMIDI } from '../lib/Util';
import store from '../store';

const el = document.querySelector('.piano-roll');

const isSpaceOrEnter = keyCode => keyCode === 32 || keyCode === 13;

const octaveStore = distinctUntilChanged(store.map(state => state.octave));

const toNote = ([e, octave]) => pitchToMIDI(octave, parseInt(e.target.dataset.note, 10));

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
  withLatestFrom(noteon, octaveStore).map(toNote).map(note => toMessage(144, note)),
  withLatestFrom(noteoff, octaveStore).map(toNote).map(note => toMessage(128, note)),
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
