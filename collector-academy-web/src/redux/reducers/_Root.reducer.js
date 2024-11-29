import { combineReducers } from 'redux';

import systemReducer from './System.reducer';
import authReducer from './Auth.reducer';
import tokenReducer from './Token.reducer';
import userReducer from './User.reducer';

const RootReducer = combineReducers({
  system: systemReducer,
  token: tokenReducer,
  auth: authReducer,
  user: userReducer
});

export default RootReducer;
