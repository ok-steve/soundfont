import Observable from 'zen-observable';

const merge = (...args) => new Observable((observer) => {
  args.forEach((obs) => {
    obs.subscribe((value) => {
      observer.next(value);
    }, (err) => {
      observer.error(err);
    }, () => {
      observer.complete();
    });
  });
});

export default merge;
