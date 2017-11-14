import setOctave from '../actions/setOctave';
import fromEvent from '../lib/fromEvent';
import store from '../store';

const el = document.querySelector('#octave');

const onChange = e => store.dispatch(setOctave(e.target.value));

fromEvent(el, 'change').subscribe(onChange);

store.subscribe(() => {
  const { octave } = store.getState();

  el.value = octave;
});
