import { change } from '../../lib/events';

import { setOctave } from '../actions/octave';
import { dispatch } from '../store';

const el = document.querySelector('#octave');

change(el).subscribe((e) => {
  dispatch(setOctave(Number(e.target.value)));
});
