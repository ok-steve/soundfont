import fromEvent from '../lib/Observable/fromEvent';
import setInstrument from '../actions/setInstrument';
import setSoundfont from '../actions/setSoundfont';
import { dispatch } from '../store';

const instrument = document.querySelector('#instrument');
const soundfont = document.querySelector('#soundfont');

const onChange = action => dispatch(action);

const toAction = action => e => action(e.target.value);

fromEvent(instrument, 'change').map(toAction(setInstrument)).subscribe(onChange);
fromEvent(soundfont, 'change').map(toAction(setSoundfont)).subscribe(onChange);
