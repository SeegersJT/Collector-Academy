export const REQUEST_USERS = '[USERS] USERS - REQUEST';
export const SET_USERS = '[USERS] USERS - SET';
export const REQUEST_USERS_LOADING = '[USERS] USERS - REQUEST - LOADING';
export const RESET_USERS = '[USERS] USERS - RESET';

export const SET_SELECTED_USERS = '[USERS] SELECTED USERS - SET';

export const requestUsers = (accessToken) => ({
  type: REQUEST_USERS,
  accessToken
});

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload
});

export const requestUsersLoading = (loading) => ({
  type: REQUEST_USERS_LOADING,
  loading
});

export const resetUser = () => ({
  type: RESET_USERS
});

export const setSelectedUsers = (selectedUsers) => ({
  type: SET_SELECTED_USERS,
  selectedUsers
});
