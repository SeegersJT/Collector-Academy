import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as usersActions from 'redux/actions/Users.action';
import * as systemActions from 'redux/actions/System.action';
import * as api from 'utils/api/Users.api';
import { Utils } from 'utils/Utils';
import { SNACK_ERROR } from 'redux/reducers/System.reducer';

function* userRequestSaga({ accessToken }) {
  yield put(usersActions.requestUsersLoading(true));
  try {
    const [endpoint, requestOptions] = api.getUsersRequest(accessToken);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(usersActions.setUsers(data));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(usersActions.requestUsersLoading(false));
}

export function* watchUsersSagas() {
  yield takeEvery(usersActions.REQUEST_USERS, userRequestSaga);
}
