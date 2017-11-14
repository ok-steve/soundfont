import { midimessage } from '../actions/midimessage';
import { store } from '../store';
import { synth } from '../synth';

const keys = 'awsedftgyhujk';

const sendMessage = (e, status) => {
  const index = keys.indexOf(e.key.toLowerCase());

  if (index === -1) {
    return;
  }

  const octave = store.getState().octave;
  const note = 12 * (e.shiftKey ? octave + 1 : octave) + index;

  synth(midimessage(status, note));
};

document.addEventListener('keydown', e => {
  if (e.repeat) {
    return;
  }

  sendMessage(e, 144);

});

document.addEventListener('keyup', e => {
  sendMessage(e, 128);
});
