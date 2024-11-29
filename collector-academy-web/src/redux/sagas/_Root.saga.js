import { all } from 'redux-saga/effects';
import { watchSystemSagas } from './System.saga';
import { watchAuthSagas } from './Auth.saga';
import { watchTokenSagas } from './Token.saga';

export default function* rootSaga() {
  yield all([watchSystemSagas(), watchAuthSagas(), watchTokenSagas()]);
}