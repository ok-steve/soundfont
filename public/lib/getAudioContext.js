let context = null;

const eventTypes = ["mousedown", "touchstart", "pointerstart"];

function createResumeAudioContext(el, type) {
  function resumeAudioContext() {
    if (context === null) {
      return;
    }

    if (context.state !== "suspended") {
      return;
    }

    eventTypes.forEach((eventType) =>
      el.removeEventListener(eventType, resumeAudioContext)
    );

    context.resume().then(() => {
      console.log("Audio context resumed");
    });
  }

  el.addEventListener(type, resumeAudioContext, false);
}

eventTypes.forEach((eventType) => createResumeAudioContext(window, eventType));

export default function () {
  if (context === null) {
    context = new AudioContext();
  }

  return context;
}
