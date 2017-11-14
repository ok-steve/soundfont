import { init } from 'snabbdom/snabbdom';
import attributes from 'snabbdom/modules/attributes';
import dataset from 'snabbdom/modules/dataset';
import eventlisteners from 'snabbdom/modules/eventlisteners';

import appShell from './components/index';
import store from './store';
import './synth';

const patch = init([
  attributes,
  dataset,
  eventlisteners,
]);

const render = (oldVnode) => patch(oldVnode, appShell(store.getState()));

const app = root => {
  let vnode = render(root);

  store.subscribe(() => {
    vnode = render(vnode);
  });
};

export default app;
