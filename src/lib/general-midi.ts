export interface IMIDIMessage {
  status: number;
  data: [number, number];
}

export const enum MIDIStatus {
  NoteOn = 144,
  NoteOff = 128,
  StatusChange = 176,
};
