import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';

const requestMIDIAccess = () =>
  new Observable((observer) => {
    if (navigator.requestMIDIAccess === undefined) {
      observer.complete();
    } else {
      navigator
        .requestMIDIAccess()
        .then((access) => {
          const midiAccess = access;

          observer.next(midiAccess);

          midiAccess.onstatechange = (e) => {
            if (e.port.connection !== 'open') {
              observer.next(e.target);
            }
          };
        })
        .catch((err) => {
          observer.error(err);
        });
    }
  });

export default requestMIDIAccess;
