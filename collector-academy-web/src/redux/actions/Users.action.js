export const USERS_REQUEST = '[USERS] USERS - REQUEST';
export const USERS_SET = '[USERS] USERS - SET';
export const USERS_REQUEST_LOADING = '[USERS] USERS - REQUEST - LOADING';
export const USERS_RESET = '[USERS] USERS - RESET';

export const requestUsers = (accessToken) => ({
  type: USERS_REQUEST,
  accessToken
});

export const requestUsersLoading = (loading) => ({
  type: USERS_REQUEST_LOADING,
  loading
});

export const setUsers = (payload) => ({
  type: USERS_SET,
  payload
});

export const resetUser = () => ({
  type: USERS_RESET
});
