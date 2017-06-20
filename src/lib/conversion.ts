const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const pitchToMidi = (octave: number, note: number): number => {
  return 12 * octave + note;
};

export const midiToFrequency = (midi: number): number => {
  return 440.0 * Math.pow(2, (Math.floor(midi) - 69) / 12.0);
};

export const frequencyToMidi = (frequency: number): number => {
  return 12 * (Math.log(frequency / 440.0) / Math.log(2)) + 69;
};

export const midiToNote = (midi: number): string => {
  const octave = Math.floor(midi / 12) - 1;

  return `${notes[midi % 12]}${octave}`;
};

export const noteToMidi = (note: string): number => {
  const octave = parseInt(note.slice(-1), 10) + 1;
  const pitch = notes.indexOf(note.slice(0, note.length - 1));

  return pitchToMidi(octave, pitch);
};

export const frequencyToNote = (frequency: number): string => {
  return midiToNote(frequencyToMidi(frequency));
};

export const noteToFrequency = (note: string): number => {
  return midiToFrequency(noteToMidi(note));
};

export const gainToVelocity = (gain: number): number => {
  return gain * 127;
};

export const velocityToGain = (velocity: number): number => {
  return velocity / 127;
};
