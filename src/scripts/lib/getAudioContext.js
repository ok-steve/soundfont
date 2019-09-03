import '../vendor/AudioContextMonkeyPatch';

let context = null;

function createResumeAudioContext(el, type) {
  function resumeAudioContext() {
    if (context === null) {
      return;
    }

    el.removeEventListener(type, resumeAudioContext);

    if (context.state !== 'suspended') {
      return;
    }

    context.resume().then(() => {
      // eslint-disable-next-line no-console
      console.log('Audio context resumed');
    });
  }

  el.addEventListener(type, resumeAudioContext, false);
}

createResumeAudioContext(window, 'mousedown');
createResumeAudioContext(window, 'touchstart');

export default function() {
  if (context === null) {
    context = new AudioContext();
  }

  return context;
}
