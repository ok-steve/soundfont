import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';

export const change = target => {
  return Observable.fromEvent(target, 'change');
};

export const keydown = target => {
  return Observable.fromEvent(target, 'keydown').filter((e) => {
    return !e.repeat;
  });
};

export const keyup = target => {
  return Observable.fromEvent(target, 'keyup');
};

export const mousedown = target => {
  return Observable.fromEvent(target, 'mousedown');
};

export const mouseup = target => {
  return Observable.fromEvent(target, 'mouseup');
};

export const touchstart = target => {
  return Observable.fromEvent(target, 'touchstart');
};

export const touchend = target => {
  return Observable.fromEvent(target, 'touchend');
};

export const pointerdown = target => {
  return Observable.merge(
    mousedown(target),
    touchstart(target),
  );
};

export const pointerup = target => {
  return Observable.merge(
    mouseup(target),
    touchend(target),
  );
};
