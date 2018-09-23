import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { navMiddleware } from './navigations';

import reducers from './reducers';

const middlewares = [navMiddleware, thunk, createLogger()];

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
