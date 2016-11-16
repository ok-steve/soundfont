export const NOTE_ON = 144;
export const NOTE_OFF = 128;
export const ONMIDIMESSAGE = 'ONMIDIMESSAGE';

export class MidiService {
  toMessage( status, note, velocity ) {
    return {
      status: status,
      data: [
        note,
        velocity
      ]
    };
  }
}
