import { combineLatest } from 'zen-observable/extras';
import fromEvent from '../lib/Observable/fromEvent';
import startWith from '../lib/Observable/startWith';

const fromChange = (sel) => {
  const el = document.querySelector(sel);

  return startWith(fromEvent(el, 'change').map(e => +e.target.value), +el.value);
};

const envelope = combineLatest(
  fromChange('#envelope-attack'),
  fromChange('#envelope-decay'),
  fromChange('#envelope-sustain'),
  fromChange('#envelope-release'),
).map(([attack, decay, sustain, release]) => ({
  attack,
  decay,
  sustain,
  release,
}));

export default envelope;
