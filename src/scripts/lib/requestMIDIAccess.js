import Observable from 'zen-observable';

const requestMIDIAccess = () => new Observable((observer) => {
  if (navigator.requestMIDIAccess === undefined) {
    observer.error(new Error('The WebMIDI API is not supported in your browser.'));
  }

  navigator.requestMIDIAccess().then((access) => {
    const midiAccess = access;

    observer.next(midiAccess);

    midiAccess.onstatechange = (e) => {
      observer.next(e.target);
    };
  }).catch((err) => {
    observer.error(err);
  });
});

export default requestMIDIAccess;
