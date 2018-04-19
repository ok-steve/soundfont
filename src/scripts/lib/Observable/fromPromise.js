import Observable from 'zen-observable';

const fromPromise = pr => new Observable((observer) => {
  pr.then((value) => {
    observer.next(value);
    observer.complete();
  }).catch((err) => {
    observer.error(err);
  });
});

export default fromPromise;
