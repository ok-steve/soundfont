import { midimessage } from '../actions/midimessage';
import { store } from '../store';
import { synth } from '../synth';

const el = document.querySelector('.piano-roll');

const sendMessage = (e, status) => {
  const octave = store.getState().octave;
  const note = 12 * octave + parseInt(e.target.dataset.note, 10);

  synth(midimessage(status, note));
};

const onNoteon = e => {
  sendMessage(e, 144);
  e.target.classList.add('is-pressed');
};

const onNoteoff = e => {
  sendMessage(e, 128);
  e.target.classList.remove('is-pressed');
};

el.addEventListener('mousedown', onNoteon);
el.addEventListener('touchstart', onNoteon);
el.addEventListener('mouseup', onNoteoff);
el.addEventListener('touchend', onNoteoff);
