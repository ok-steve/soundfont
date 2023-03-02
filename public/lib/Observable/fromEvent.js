import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';

const fromEvent = (target, eventName) =>
  new Observable((observer) => {
    const listener = (e) => observer.next(e);

    target.addEventListener(eventName, listener);

    return () => target.removeEventListener(eventName, listener);
  });

export default fromEvent;
