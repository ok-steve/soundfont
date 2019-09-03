import withLatestFrom from './lib/Observable/withLatestFrom';
import createSoundfont from './lib/createSoundfont';
import BufferSynth from './lib/BufferSynth';
import PolySynth from './lib/PolySynth';
import getAudioContext from './lib/getAudioContext';
import { NOTE_ON, NOTE_OFF } from './lib/toMessage';
import envelope from './components/envelope';
import soundfont from './components/soundfont';
import bus from './bus';

const context = getAudioContext();

const instrumentObservable = soundfont.flatMap(({ soundfont: sf, instrument }) =>
  createSoundfont(context, instrument, sf),
);

const synth = new PolySynth(context, BufferSynth).connect(context.destination);

withLatestFrom(bus, instrumentObservable, envelope).subscribe(([message, sf, env]) => {
  const { status } = message;

  /* eslint-disable default-case */
  switch (status) {
    case NOTE_ON: {
      const { note, velocity } = message;
      synth.triggerAttack(note, context.currentTime, velocity, sf[note], { envelope: env });
      break;
    }
    case NOTE_OFF: {
      const { note } = message;
      synth.triggerRelease(note);
      break;
    }
  }
  /* eslint-enable */
});
