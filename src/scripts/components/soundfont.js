import { setSoundfont } from '../actions/soundfont';
import { fromEvent } from '../lib/observable';
import { store } from '../store';

const el = document.querySelector('#soundfont');

const onChange = e => store.dispatch(setSoundfont(e.target.value));

fromEvent(el, 'change').subscribe(onChange);
