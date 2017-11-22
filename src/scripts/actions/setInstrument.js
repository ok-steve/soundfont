import { SET_SOUNDFONT_INSTRUMENT } from '../constants/index';

const setInstrument = value => ({
  value,
  type: SET_SOUNDFONT_INSTRUMENT,
});

export default setInstrument;
