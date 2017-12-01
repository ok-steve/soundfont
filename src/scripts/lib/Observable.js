import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/withLatestFrom';

export { merge };

export const fromEvent = (target, name) => new Observable((observer) => {
  const handler = target.addEventListener(name, (e) => {
    observer.next(e);
  });

  return () => {
    target.removeEventListener(handler);
  };
});

export const fromPromise = pr => new Observable((observer) => {
  pr.then((value) => {
    observer.next(value);
  }).catch((err) => {
    observer.error(err);
  });
});

export default Observable;
