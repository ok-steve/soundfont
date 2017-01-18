import { PolySynth, MonoSynth } from 'tone';

export class PolySynthService {
  create( polyphony = 4, voice = MonoSynth, ...args ) {
    return new PolySynth( polyphony, voice, ...args ).toMaster();
  }
}
