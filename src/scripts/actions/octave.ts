import { SET_OCTAVE } from '../constants/index';
import { IAction } from './index';

export const setOctave = (value: number): IAction => {
  return {
    value,
    type: SET_OCTAVE,
  };
};
