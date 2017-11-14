import Observable from 'zen-observable';

const fromPromise = promise => new Observable((observer) => {
  promise.then((value) => {
    observer.next(value);
    observer.complete();
  }).catch((err) => {
    observer.error(err);
  });
});

export default fromPromise;
