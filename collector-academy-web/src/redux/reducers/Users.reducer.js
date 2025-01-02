import { USERS_REQUEST_LOADING, USERS_RESET, USERS_SET } from 'redux/actions/Users.action';
import { formatConstantUsers } from './constants/Users.constant';

const initialState = {
  users: [],
  usersLoading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_SET:
      return {
        ...state,
        users: action.payload.map((user) => formatConstantUsers(user))
      };
    case USERS_RESET:
      return {
        ...state,
        users: initialState.users
      };

    case USERS_REQUEST_LOADING:
      return {
        ...state,
        usersLoading: action.loading
      };
    default:
      return state;
  }
};

export default usersReducer;
