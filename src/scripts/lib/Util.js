const PITCH_CLASSES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const decodeBase64 = (base64) => {
  const raw = atob(base64);
  const len = raw.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i += 1) {
    bytes[i] = raw.charCodeAt(i);
  }

  return bytes.buffer;
};

export const pitchToMIDI = (octave, pitch) => (12 * octave) + pitch;

export const noteToMIDI = (note) => {
  const octave = parseInt(note.slice(-1), 10) + 1;
  const pitch = PITCH_CLASSES.indexOf(note.slice(0, note.length - 1));

  return pitchToMIDI(octave, pitch);
};

export const toMessage = (status, data0, data1 = 127) => ({
  status,
  data: [data0, data1],
});

const Util = {
  decodeBase64,
  pitchToMIDI,
  noteToMIDI,
  toMessage,
};

export default Util;
