import Observable from 'zen-observable';

const fromEvent = (target, eventName) => new Observable((observer) => {
  const listener = e => observer.next(e);

  target.addEventListener(eventName, listener);

  return () => target.removeEventListener(eventName, listener);
});

export default fromEvent;
