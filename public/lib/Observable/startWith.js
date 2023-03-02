import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';

const startWith = (source, value) =>
  new Observable((observer) => {
    observer.next(value);

    const subscription = source.subscribe({
      next(v) {
        observer.next(v);
      },
      error(e) {
        observer.error(e);
      },
      complete() {
        observer.complete();
      },
    });

    return () => subscription.unsubscribe();
  });

export default startWith;
