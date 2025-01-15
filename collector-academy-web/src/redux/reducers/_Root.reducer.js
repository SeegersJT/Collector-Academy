import { combineReducers } from 'redux';

import systemReducer from './System.reducer';
import authReducer from './Auth.reducer';
import tokenReducer from './Token.reducer';
import userReducer from './User.reducer';
import usersReducer from './Users.reducer';
import commonReducer from './Common.reducer';
import coursesReducer from './Courses.reducer';

const RootReducer = combineReducers({
  system: systemReducer,
  token: tokenReducer,
  auth: authReducer,
  user: userReducer,
  common: commonReducer,
  users: usersReducer,
  courses: coursesReducer
});

export default RootReducer;
