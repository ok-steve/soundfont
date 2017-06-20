import {
  SET_MIDI_INPUT,
  SET_MIDI_INPUT_MAP,
} from '../constants/index';

import { IAction } from './index';

export const setMidiInput = (value: string): IAction => {
  return {
    value,
    type: SET_MIDI_INPUT,
  };
};

export const setMidiInputMap = (value: WebMidi.MIDIInputMap): IAction => {
  return {
    value,
    type: SET_MIDI_INPUT_MAP,
  };
};
