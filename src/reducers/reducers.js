import { combineReducers } from 'redux';

import elements from './elements-reducer';
import message from './message-reducer';

export default combineReducers({
  elements,
  message,
});
