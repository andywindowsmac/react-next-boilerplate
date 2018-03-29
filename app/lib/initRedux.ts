import { createStore, combineReducers, compose } from 'redux';

import * as reducers from '../ducks';

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f;
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}
const rootReducer = combineReducers({ ...reducers });

const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, compose(devtools));
};

export default initStore;
