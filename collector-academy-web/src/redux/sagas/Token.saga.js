import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as tokenActions from 'redux/actions/Token.action';
import * as systemActions from 'redux/actions/System.action';
import * as authActions from 'redux/actions/Auth.action';
import * as userActions from 'redux/actions/User.action';
import * as api from 'utils/api/Auth.api';
import { Utils } from 'utils/Utils';
import { SNACK_ERROR, SNACK_SUCCESS } from 'redux/reducers/System.reducer';
import { jwtDecode } from 'jwt-decode';
import { navigateTo } from 'utils/NavigateService';

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

    if (Object.hasOwn(data, 'access_token')) {
      const accessToken = data.access_token;
      const decodedData = jwtDecode(accessToken);

      const auth = {
        accessToken,
        expireDate: new Date(decodedData.exp * 1000),
        issuesAt: new Date(decodedData.iat * 1000),
        jwtID: decodedData.jti
      };

      const user = {
        username: decodedData.sub,
        employeeNo: decodedData.employee_no,
        branchNo: decodedData.branch_no,
        roleNo: decodedData.role_no,
        role: decodedData.role,
        emailAddress: decodedData.email_address,
        mobileNumber: decodedData.mobile_number,
        gender: decodedData.gender,
        name: decodedData.name,
        surname: decodedData.surname,
        idNumber: decodedData.id_number
      };

      console.log('auth', auth);
      console.log('user', user);

      yield put(authActions.loginUserSuccess(auth));
      yield put(userActions.setUser(user));

      navigateTo('/dashboard');

      yield put(systemActions.addSystemNotification('Welcome to The Collector Academy', SNACK_SUCCESS));
    }
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
