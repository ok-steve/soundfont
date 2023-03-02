import Observable from 'https://cdn.skypack.dev/zen-observable/esm.js';

const distinctUntilChanged = (source) =>
  new Observable((observer) => {
    let value;

    const subscription = source.subscribe({
      next(v) {
        const same = value === v;
        value = v;

        if (!same) {
          observer.next(v);
        }
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

export default distinctUntilChanged;
