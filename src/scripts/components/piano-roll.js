import { toMessage } from '../lib/util';
import { fromEvent, merge } from '../lib/observable';
import { store } from '../store';

const el = document.querySelector('.piano-roll');

const toNote = e => {
  const { octave } = store.getState();

  return 12 * octave + parseInt(e.target.dataset.note, 10);
};

const pointerdown = target => merge(
  fromEvent(target, 'mousedown'),
  fromEvent(target, 'touchstart')
);

const pointerup = target => merge(
  fromEvent(target, 'mouseup'),
  fromEvent(target, 'touchend')
);

const noteon = pointerdown(el).map(e => {
  e.target.classList.add('is-pressed');

  return e;
}).map(toNote).map(note => {
  return toMessage(144, note);
});

const noteoff = pointerup(el).map(e => {
  e.target.classList.remove('is-pressed');
  return e;
}).map(toNote).map(note => {
  return toMessage(128, note);
});

export const pianoMessages = merge(
  noteon,
  noteoff
);
