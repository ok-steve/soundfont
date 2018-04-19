import { createStore } from 'redux';

import Observable from 'zen-observable';

import rootReducer from './reducers/index';

const reduxStore = createStore(rootReducer);

export const dispatch = (action) => {
  reduxStore.dispatch(action);
};

const store = new Observable((observer) => {
  const next = () => {
    observer.next(reduxStore.getState());
  };

  next();

  reduxStore.subscribe(() => {
    next();
  });
});

export default store;
