import { SET_MIDI_INPUT, SET_MIDI_INPUT_MAP } from '../constants/index';

const INITIAL_STATE = {
  current: '',
  map: null,
};

export const webmidi = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MIDI_INPUT:
      return {
        ...state,
        current: action.value,
      };

    case SET_MIDI_INPUT_MAP:
      return {
        ...state,
        map: action.value,
      };

    default:
      return state;
  }
};
