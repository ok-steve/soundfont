import { setSoundfont } from '../actions/soundfont';
import { store } from '../store';

const el = document.querySelector('#soundfont');

const onChange = e => store.dispatch(setSoundfont(e.target.value));

el.addEventListener('change', onChange);
