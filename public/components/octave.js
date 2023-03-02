import distinctUntilChanged from '../lib/Observable/distinctUntilChanged.js';
import state from './state.js';

const octave = distinctUntilChanged(
  state.map((data) => parseInt(data.get('octave'), 10))
);

export default octave;
