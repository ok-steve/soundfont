import { change } from '../../lib/events';

import { setSoundfont } from '../actions/soundfont';
import { dispatch } from '../store';

const el = document.querySelector('#soundfont');

change(el).subscribe((e) => {
  dispatch(setSoundfont(e.target.value));
});
