import { combineReducers } from 'redux';

import login from './login';
import mercado from './mercado';
import produto from './produtos';

export default combineReducers({
  login,
  mercado,
  produto,
});
