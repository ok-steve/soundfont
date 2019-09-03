import distinctUntilChanged from '../lib/Observable/distinctUntilChanged';
import state from './state';

const octave = distinctUntilChanged(
  state.map((data) => parseInt(data.get('octave'), 10)),
);

export default octave;
