import { setOctave } from '../actions/octave';
import { fromEvent } from '../lib/observable';
import { store } from '../store';

const el = document.querySelector('#octave');

const onChange = e => store.dispatch(setOctave(e.target.value));

fromEvent(el, 'change').subscribe(onChange);
