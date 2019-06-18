import './vendor/AudioContextMonkeyPatch';

import withLatestFrom from './lib/Observable/withLatestFrom';
import createSoundfont from './lib/createSoundfont';
import BufferSynth from './lib/BufferSynth';
import PolySynth from './lib/PolySynth';
import envelope from './components/envelope';
import soundfont from './components/soundfont';
import bus from './bus';

const context = new AudioContext();

const instrumentObservable = soundfont.flatMap(({ soundfont: sf, instrument }) => createSoundfont(context, instrument, sf));

const synth = new PolySynth(context, BufferSynth).connect(context.destination);

withLatestFrom(bus, instrumentObservable, envelope).subscribe(([message, sf, env]) => {
  const { status, data } = message;
  const [note, velocity] = data;

  switch (status) {
    case 144:
      synth.start(note, velocity, sf[note], { envelope: env });
      break;

    case 128:
      synth.stop(note);
      break;

    default:
      break;
  }
});
