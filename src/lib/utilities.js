const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const midiToFrequency = midi => {
  return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
};

export const midiToNote = midi => {
  const octave = Math.floor(midi / 12) - 1;

  return `${notes[midi % 12]}${octave}`;
};

export const velocityToGain = velocity => {
  return (velocity / 127);
};
