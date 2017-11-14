import setEnvelope from '../actions/setEnvelope';
import fromEvent from '../lib/fromEvent';
import store from '../store';

const attack = document.querySelector('#envelope-attack');
const decay = document.querySelector('#envelope-decay');
const sustain = document.querySelector('#envelope-sustain');
const release = document.querySelector('#envelope-release');

const onChange = key => e => store.dispatch(setEnvelope(key, e.target.value));

fromEvent(attack, 'change').subscribe(onChange('attack'));
fromEvent(decay, 'change').subscribe(onChange('decay'));
fromEvent(sustain, 'change').subscribe(onChange('sustain'));
fromEvent(release, 'change').subscribe(onChange('release'));
