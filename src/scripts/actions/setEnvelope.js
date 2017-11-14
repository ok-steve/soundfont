import { SET_ENVELOPE } from '../constants/index';

const setEnvelope = (key, value) => ({
  type: SET_ENVELOPE,
  value: {
    [key]: value,
  },
});

export default setEnvelope;
