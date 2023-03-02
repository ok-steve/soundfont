// https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
export const NOTE_OFF = 8;
export const NOTE_ON = 9;
export const POLYPHONIC_KEY_PRESSURE = 10;
export const CONTROL_CHANGE = 11;
export const PROGRAM_CHANGE = 12;
export const CHANNEL_PRESSURE = 13;
export const PITCH_BEND = 14;

export default function(message, data0, data1) {
  const status = Math.floor(message / 16);
  const channel = message % 16;

  if (status === NOTE_OFF || (status === NOTE_ON && data1 === 0)) {
    return {
      status,
      channel,
      note: data0,
      velocity: data1,
    };
  }
  if (status === NOTE_ON) {
    return {
      status,
      channel,
      note: data0,
      velocity: data1,
    };
  }
  if (status === PITCH_BEND) {
    // data0 is coarse detune, data1 is fine detune, center pitch is 2000 HZ
    // 8192 is Math.pow(2, 13)
    return {
      status,
      channel,
      value: (data1 * 128.0 + data0 - 8192) / 8192.0,
    };
  }
  return {
    status,
    channel,
    data0,
    data1,
  };
}
