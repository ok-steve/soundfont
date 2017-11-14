import { SET_MIDI_INPUT } from '../constants/index';

const setActiveDevice = value => ({
  value,
  type: SET_MIDI_INPUT,
});

export default setActiveDevice;
