import { SET_MIDI_INPUT, SET_MIDI_INPUT_MAP } from '../constants/index';

export const setMidiInput = value => {
  return {
    value,
    type: SET_MIDI_INPUT,
  };
};

export const setMidiInputMap = value => {
  return {
    value,
    type: SET_MIDI_INPUT_MAP,
  };
};
