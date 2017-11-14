import { Observable } from './observable';

export const requestMIDIAccess = () => new Observable((observer) => {
  if (navigator.requestMIDIAccess === undefined) {
    observer.error(new Error('The WebMIDI API is not supported in your browser.'));
  }

  navigator.requestMIDIAccess().then((access) => {
    observer.next(access);

    access.onstatechange = (e) => {
      observer.next(e.target);
    };
  }).catch((err) => {
    observer.error(err);
  });
});
