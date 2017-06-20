import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';

export const change = (target: EventTarget): Observable<Event> => {
  return Observable.fromEvent(target, 'change');
};

export const keydown = (target: EventTarget): Observable<KeyboardEvent> => {
  return Observable.fromEvent(target, 'keydown').filter((e: KeyboardEvent): boolean => {
    return !e.repeat;
  });
};

export const keyup = (target: EventTarget): Observable<KeyboardEvent> => {
  return Observable.fromEvent(target, 'keyup');
};

export const mousedown = (target: EventTarget): Observable<MouseEvent> => {
  return Observable.fromEvent(target, 'mousedown');
};

export const mouseup = (target: EventTarget): Observable<MouseEvent> => {
  return Observable.fromEvent(target, 'mouseup');
};

export const touchstart = (target: EventTarget): Observable<TouchEvent> => {
  return Observable.fromEvent(target, 'touchstart');
};

export const touchend = (target: EventTarget): Observable<TouchEvent> => {
  return Observable.fromEvent(target, 'touchend');
};

export type PointerEvent = MouseEvent | TouchEvent;

export const pointerdown = (target: EventTarget): Observable<PointerEvent> => {
  return Observable.merge(
    mousedown(target),
    touchstart(target),
  );
};

export const pointerup = (target: EventTarget): Observable<PointerEvent> => {
  return Observable.merge(
    mouseup(target),
    touchend(target),
  );
};
