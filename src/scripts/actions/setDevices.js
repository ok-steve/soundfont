import { SET_MIDI_INPUT_MAP } from '../constants/index';

const setDevices = value => ({
  value,
  type: SET_MIDI_INPUT_MAP,
});

export default setDevices;
