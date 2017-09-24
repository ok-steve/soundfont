import { change } from '../../lib/events';

import { setEnvelope } from '../actions/envelope';

import { dispatch } from '../store';

const attack = document.querySelector('#envelope-attack');
const decay = document.querySelector('#envelope-decay');
const sustain = document.querySelector('#envelope-sustain');
const release = document.querySelector('#envelope-release');

const onChange = (key, e) => {
  dispatch(setEnvelope(key, Number(e.target.value)));
};

change(attack).subscribe((e) => {
  onChange('attack', e);
});

change(decay).subscribe((e) => {
  onChange('decay', e);
});

change(sustain).subscribe((e) => {
  onChange('sustain', e);
});

change(release).subscribe((e) => {
  onChange('release', e);
});
