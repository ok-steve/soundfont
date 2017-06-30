import { change } from '../../lib/events';

import { setEnvelope } from '../actions/envelope';

import { dispatch } from '../store';

const attack = document.querySelector('#envelope-attack');
const decay = document.querySelector('#envelope-decay');
const sustain = document.querySelector('#envelope-sustain');
const release = document.querySelector('#envelope-release');

const onChange = (key: string, e: Event): void => {
  dispatch(setEnvelope(key, Number(e.target.value)));
};

change(attack).subscribe((e: Event): void => {
  onChange('attack', e);
});

change(decay).subscribe((e: Event): void => {
  onChange('decay', e);
});

change(sustain).subscribe((e: Event): void => {
  onChange('sustain', e);
});

change(release).subscribe((e: Event): void => {
  onChange('release', e);
});
