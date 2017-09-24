import { SET_ENVELOPE } from '../constants/index';

export const setEnvelope = (key, value) => {
  return {
    type: SET_ENVELOPE,
    value: {
      [key]: value,
    },
  };
};
