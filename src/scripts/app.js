import { init } from 'snabbdom/snabbdom';
import attributes from 'snabbdom/modules/attributes';
import dataset from 'snabbdom/modules/dataset';
import eventlisteners from 'snabbdom/modules/eventlisteners';

import { appShell } from './components/index';
import { store } from './store';
import './synth';

const patch = init([
  attributes,
  dataset,
  eventlisteners,
]);

const render = (vnode) => {
  const newVnode = appShell(store.getState());

  patch(vnode, newVnode);

  return newVnode;
};

export const app = root => {
  let vnode = render(root);

  store.subscribe(() => {
    vnode = render(vnode);
  });
}
