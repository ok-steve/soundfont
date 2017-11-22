import { fromEvent } from '../lib/Observable';

import setOctave from '../actions/setOctave';
import store, { dispatch } from '../store';

const el = document.querySelector('#octave');

const onChange = e => dispatch(setOctave(e.target.value));

fromEvent(el, 'change').subscribe(onChange);

store.map(state => state.octave).distinctUntilChanged().subscribe((octave) => {
  el.value = octave;
});
