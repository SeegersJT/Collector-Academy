import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as tokenActions from 'redux/actions/Token.action';
import * as systemActions from 'redux/actions/System.action';
import * as api from 'utils/api/Auth.api';
import { Utils } from 'utils/Utils';
import { SNACK_ERROR } from 'redux/reducers/System.reducer';

function* confirmationTokenValidationSaga({ payload, onValidateSuccess }) {
  yield put(tokenActions.requestConfirmationTokenValidationLoading(true));

  try {
    const [endpoint, requestOptions] = api.getTokenValidationRequest(payload);
    yield call(axios, endpoint, requestOptions);

    yield put(tokenActions.validateConfirmationTokenSuccess());
    yield call(onValidateSuccess);
  } catch (error) {
    yield put(tokenActions.validateConfirmationTokenFailure());

    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(tokenActions.requestConfirmationTokenValidationLoading(false));
}

function* confirmationTokenOneTimePinSaga({ payload }) {
  yield put(tokenActions.requestOneTimePinConfirmationTokenLoading(true));

  try {
    const [endpoint, requestOptions] = api.getOneTimePinRequest(payload);
    const { data } = yield call(axios, endpoint, requestOptions);

    console.log('data', data);
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Failed to Validate One Time Pin', SNACK_ERROR));
    }
  }

  yield put(tokenActions.requestOneTimePinConfirmationTokenLoading(false));
}

export function* watchTokenSagas() {
  yield takeEvery(tokenActions.CONFIRMATION_TOKEN_VALIDATION_REQUEST, confirmationTokenValidationSaga);
  yield takeEvery(tokenActions.CONFIRMATION_TOKEN_ONE_TIME_PIN_REQUEST, confirmationTokenOneTimePinSaga);
}
