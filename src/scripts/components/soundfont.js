import setSoundfont from '../actions/setSoundfont';
import fromEvent from '../lib/fromEvent';
import store from '../store';

const el = document.querySelector('#soundfont');

const onChange = e => store.dispatch(setSoundfont(e.target.value));

fromEvent(el, 'change').subscribe(onChange);
