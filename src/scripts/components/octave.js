import fromEvent from '../lib/Observable/fromEvent';
import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';

import setOctave from '../actions/setOctave';
import store, { dispatch } from '../store';

const el = document.querySelector('#octave');

const onChange = e => dispatch(setOctave(e.target.value));

fromEvent(el, 'change').subscribe(onChange);

distinctUntilChanged(store.map(state => state.octave)).subscribe((octave) => {
  el.value = octave;
});
