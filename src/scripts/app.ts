import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

import { init } from 'snabbdom/snabbdom';
import attributes from 'snabbdom/modules/attributes';
import dataset from 'snabbdom/modules/dataset';
import eventlisteners from 'snabbdom/modules/eventlisteners';

import { appShell } from './components/index';

import { store } from './store';

const patch = init([
  attributes,
  dataset,
  eventlisteners,
]);

export const app = (root: HTMLElement): Observable<VNode> => {
  return store.map(appShell).scan(patch, root);
});
