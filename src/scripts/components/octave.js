import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';
import fromEvent from '../lib/Observable/fromEvent';
import startWith from '../lib/Observable/startWith';

const el = document.querySelector('#octave');
const octave = distinctUntilChanged(startWith(fromEvent(el, 'change'), +el.value));

export default octave;
