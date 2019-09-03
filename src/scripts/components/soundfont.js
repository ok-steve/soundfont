import state from './state';

const soundfont = state.map((data) => ({
  instrument: data.get('instrument'),
  soundfont: data.get('soundfont'),
}));

export default soundfont;
