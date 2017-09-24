import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

import { rootReducer } from './reducers/index';

const actionStream = new Subject();
export const bus = new Subject();

export const dispatch = (action) => {
  return actionStream.next(action);
};

export const publish = (message) => {
  return bus.next(message);
};

const INITIAL_STATE = rootReducer();

export const store = actionStream.scan(rootReducer, INITIAL_STATE);
