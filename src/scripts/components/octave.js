import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';
import fromEvent from '../lib/Observable/fromEvent';
import startWith from '../lib/Observable/startWith';

const fromChange = (sel) => {
  const el = document.querySelector(sel);

  return startWith(fromEvent(el, 'change').map(e => +e.target.value), +el.value);
};

const octave = distinctUntilChanged(fromChange('#octave'));

export default octave;
