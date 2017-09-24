const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const pitchToMidi = (octave, note) => {
  return 12 * octave + note;
};

export const midiToFrequency = (midi) => {
  return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
};

export const frequencyToMidi = (frequency) => {
  return 12 * (Math.log(frequency / 440.0) / Math.log(2)) + 69;
};

export const midiToNote = (midi) => {
  const octave = Math.floor(midi / 12) - 1;

  return `${notes[midi % 12]}${octave}`;
};

export const noteToMidi = (note) => {
  const octave = parseInt(note.slice(-1), 10) + 1;
  const pitch = notes.indexOf(note.slice(0, note.length - 1));

  return pitchToMidi(octave, pitch);
};

export const frequencyToNote = (frequency) => {
  return midiToNote(frequencyToMidi(frequency));
};

export const noteToFrequency = (note) => {
  return midiToFrequency(noteToMidi(note));
};

export const gainToVelocity = (gain) => {
  return gain * 127;
};

export const velocityToGain = (velocity) => {
  return velocity / 127;
};
