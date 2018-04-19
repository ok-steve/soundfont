import { init } from 'snabbdom/snabbdom';
import attributes from 'snabbdom/modules/attributes';
import dataset from 'snabbdom/modules/dataset';
import eventlisteners from 'snabbdom/modules/eventlisteners';

import scan from './lib/Observable/scan';
import appShell from './components/index';
import store from './store';
import './synth';

const patch = init([
  attributes,
  dataset,
  eventlisteners,
]);

const app = root => scan(store.map(appShell), patch, root);

export default app;
