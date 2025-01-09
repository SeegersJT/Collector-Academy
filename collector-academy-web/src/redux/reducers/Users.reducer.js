import {
  REQUEST_ADD_USERS_FILE_UPLOAD_VALIDATE_LOADING,
  REQUEST_UPDATE_USERS_LOADING,
  REQUEST_USERS_DELETE_LOADING,
  REQUEST_USERS_LOADING,
  REQUEST_USERS_RESET_PASSWORD_LOADING,
  RESET_USERS,
  SET_ADD_USERS_FILE_UPLOAD_VALIDATE,
  SET_SELECTED_USERS,
  SET_USERS
} from 'redux/actions/Users.action';
import { formatConstantUsers } from './constants/Users.constant';

const initialState = {
  users: [],
  selectedUsers: [],
  validateUsers: [],
  usersLoading: false,
  updateUsersLoading: false,
  usersResetPasswordLoading: false,
  usersDeleteLoading: false,
  addUsersFileUploadValidateLoading: false
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

    case REQUEST_UPDATE_USERS_LOADING:
      return {
        ...state,
        updateUsersLoading: action.loading
      };

    case REQUEST_USERS_RESET_PASSWORD_LOADING:
      return {
        ...state,
        usersResetPasswordLoading: action.loading
      };

    case REQUEST_USERS_DELETE_LOADING:
      return {
        ...state,
        usersDeleteLoading: action.loading
      };

    case SET_ADD_USERS_FILE_UPLOAD_VALIDATE:
      return {
        ...state,
        validateUsers: action.payload
      };

    case REQUEST_ADD_USERS_FILE_UPLOAD_VALIDATE_LOADING:
      return {
        ...state,
        addUsersFileUploadValidateLoading: action.loading
      };

    default:
      return state;
  }
};

export default usersReducer;
