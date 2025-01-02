import { combineReducers } from 'redux';

import systemReducer from './System.reducer';
import authReducer from './Auth.reducer';
import tokenReducer from './Token.reducer';
import userReducer from './User.reducer';
import usersReducer from './Users.reducer';

const RootReducer = combineReducers({
  system: systemReducer,
  token: tokenReducer,
  auth: authReducer,
  user: userReducer,
  users: usersReducer
});

export default RootReducer;
