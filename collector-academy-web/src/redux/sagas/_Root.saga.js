import { all } from 'redux-saga/effects';

import { watchSystemSagas } from './System.saga';
import { watchAuthSagas } from './Auth.saga';
import { watchTokenSagas } from './Token.saga';
import { watchUsersSagas } from './Users.saga';
import { watchCommonSaga } from './Common.saga';
import { watchCoursesSagas } from './Courses.saga';

export default function* rootSaga() {
  yield all([watchSystemSagas(), watchAuthSagas(), watchTokenSagas(), watchUsersSagas(), watchCommonSaga(), watchCoursesSagas()]);
}
