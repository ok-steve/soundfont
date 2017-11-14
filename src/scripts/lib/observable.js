import Observable from 'zen-observable';

export { Observable };

export const fromEvent = (target, eventName) => new Observable((observer) => {
  const handler = e => observer.next(e);

  target.addEventListener(eventName, handler);

  return () => target.removeEventListener(eventName, handler);
});

export const merge = (...args) => {
  return new Observable(observer => {
    args.forEach(obs => {
      obs.subscribe(value => {
        observer.next(value);
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });
    });
  });
};
