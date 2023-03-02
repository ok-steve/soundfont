import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';

const fromPromise = (pr) =>
  new Observable((observer) => {
    pr.then((value) => {
      observer.next(value);
      observer.complete();
    }).catch((err) => {
      observer.error(err);
    });
  });

export default fromPromise;
