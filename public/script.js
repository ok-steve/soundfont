import fromPromise from './lib/Observable/fromPromise.js';
import withLatestFrom from './lib/Observable/withLatestFrom.js';
import createSoundfont from './lib/createSoundfont.js';
import BufferSynth from './lib/BufferSynth.js';
import PolySynth from './lib/PolySynth.js';
import getAudioContext from './lib/getAudioContext.js';
import { NOTE_ON, NOTE_OFF } from './lib/toMessage.js';
import envelope from './components/envelope.js';
import soundfont from './components/soundfont.js';
import bus from './bus.js';

const context = getAudioContext();

const instrumentObservable = soundfont.flatMap(
  ({ soundfont: sf, instrument }) =>
    fromPromise(createSoundfont(context, instrument, sf))
);

const synth = new PolySynth(context, BufferSynth).connect(context.destination);

withLatestFrom(bus, instrumentObservable, envelope).subscribe(
  ([message, sf, env]) => {
    const { status } = message;

    switch (status) {
      case NOTE_ON: {
        const { note, velocity } = message;
        synth.triggerAttack(note, context.currentTime, velocity, sf.get(note), {
          envelope: env,
        });
        break;
      }
      case NOTE_OFF: {
        const { note } = message;
        synth.triggerRelease(note);
        break;
      }
    }
  }
);

// Sync input and output values
document.querySelectorAll('input[type="range"][id]').forEach((input) => {
  input.addEventListener('input', (e) => {
    const id = e.target.id;
    const output = document.querySelector(`output[for="${id}"]`);

    if (output !== null) {
      output.textContent = e.target.value;
    }
  });
});
