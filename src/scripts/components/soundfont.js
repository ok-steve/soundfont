import { combineLatest } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import startWith from '../lib/Observable/startWith';

const fromChange = (sel) => {
  const el = document.querySelector(sel);

  return startWith(fromEvent(el, 'change'), el.value);
};

const soundfont = combineLatest(fromChange('#instrument'), fromChange('#soundfont')).map(
  ([instrument, sf]) => ({ instrument, soundfont: sf }),
);

export default soundfont;
