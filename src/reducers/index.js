import { combineReducers } from 'redux';

import manga from './manga';
import nav from './navigation';

export default combineReducers({
  nav,
  manga,
});