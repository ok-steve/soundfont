import Observable from 'zen-observable';

const fromEvent = (target, eventName) => new Observable((observer) => {
  const handler = e => observer.next(e);

  target.addEventListener(eventName, handler);

  return () => target.removeEventListener(eventName, handler);
});

export default fromEvent;
