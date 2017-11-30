import './vendor/AudioContextMonkeyPatch';

import Observable from './lib/Observable';
import createSoundfont from './lib/createSoundfont';
import BufferSynth from './lib/BufferSynth';
import PolySynth from './lib/PolySynth';
import store from './store';
import bus from './bus';

const context = new AudioContext();

const envelopeObservable = store.map(state => state.envelope);
const instrumentObservable = store.map(state => state.soundfont).distinctUntilChanged().flatMap(({ soundfont, instrument }) => {
  return createSoundfont(context, instrument, soundfont);
});

const synth = new PolySynth(context, BufferSynth).connect(context.destination);

bus.withLatestFrom(instrumentObservable, envelopeObservable).subscribe(([message, soundfont, envelope]) => {
  const { status, data } = message;
  const [note, velocity] = data;

  switch (status) {
    case 144:
      const buffer = soundfont[note];

      synth.start(note, velocity, buffer, { envelope })
      break;

    case 128:
      synth.stop(note);
      break;
  }
});
