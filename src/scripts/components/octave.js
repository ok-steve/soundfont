import { setOctave } from '../actions/octave';
import { store } from '../store';

const el = document.querySelector('#octave');

const onChange = e => store.dispatch(setOctave(e.target.value));

el.addEventListener('change', onChange);
