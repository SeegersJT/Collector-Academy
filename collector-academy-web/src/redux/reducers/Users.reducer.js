import { REQUEST_USERS_LOADING, RESET_USERS, SET_SELECTED_USERS, SET_USERS } from 'redux/actions/Users.action';
import { formatConstantUsers } from './constants/Users.constant';

const initialState = {
  users: [],
  selectedUsers: [],
  usersLoading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.map((user) => formatConstantUsers(user))
      };

    case RESET_USERS:
      return {
        ...state,
        users: initialState.users
      };

    case SET_SELECTED_USERS:
      return {
        ...state,
        selectedUsers: action.selectedUsers
      };

    case REQUEST_USERS_LOADING:
      return {
        ...state,
        usersLoading: action.loading
      };
    default:
      return state;
  }
};

export default usersReducer;
