import { setEnvelope } from '../actions/envelope';
import { store } from '../store';

const attack = document.querySelector('#envelope-attack');
const decay = document.querySelector('#envelope-decay');
const sustain = document.querySelector('#envelope-sustain');
const release = document.querySelector('#envelope-release');

const onChange = key => e => store.dispatch(setEnvelope(key, e.target.value));

attack.addEventListener('change', onChange('attack'));
decay.addEventListener('change', onChange('decay'));
sustain.addEventListener('change', onChange('sustain'));
release.addEventListener('change', onChange('release'));
