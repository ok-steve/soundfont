import Observable from 'zen-observable';

const toArray = iter =>
Array.from(iter)
    .sort((x, y) => x[0] - y[0])
    .map(x => x[1]);

const withLatestFrom = (...sources) =>
  new Observable((observer) => {
    if (sources.length === 0) {
      return Observable.from([]);
    }

    let count = sources.length;
    const values = new Map();

    const subscriptions = sources.map((source, index) =>
      Observable.from(source).subscribe({
        next(v) {
          values.set(index, v);
          if (values.size === sources.length && index === 0) {
            observer.next(toArray(values));
          }
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          count -= 1;

          if (count === 0) {
            observer.complete();
          }
        },
      }));

    return () => subscriptions.forEach(s => s.unsubscribe());
  });

export default withLatestFrom;
