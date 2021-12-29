import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';
import actionLoadElements from '../actions/elements-actions';
import logger from './logger';

// Create store
const store = createStore(reducers, applyMiddleware(thunk, logger));

store.dispatch(actionLoadElements());

export default store;
