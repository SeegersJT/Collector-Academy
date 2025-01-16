import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as coursesActions from 'redux/actions/Courses.action';
import * as systemActions from 'redux/actions/System.action';
import * as api from 'utils/api/Courses.api';
import { Utils } from 'utils/Utils';
import { SNACK_ERROR, SNACK_SUCCESS } from 'redux/reducers/System.reducer';

function* coursesRequestSaga({ accessToken }) {
  yield put(coursesActions.requestAllCoursesLoading(true));
  try {
    const [endpoint, requestOptions] = api.getAllCoursesRequest(accessToken);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setAllCourses(data));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestAllCoursesLoading(false));
}

function* getAllCourseDifficultiesRequestSaga({ accessToken }) {
  yield put(coursesActions.requestAllCourseDifficultiesLoading(true));

  try {
    const [endpoint, requestOptions] = api.getAllCourseDifficultiesRequest(accessToken);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setAllCourseDifficulties(data));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestAllCourseDifficultiesLoading(false));
}

function* courseUpdateRequestSaga({ accessToken, payload, courseNo }) {
  yield put(coursesActions.requestCourseUpdateLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseUpdateRequest(accessToken, payload, courseNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCourseChange(data));
    yield put(systemActions.addSystemNotification('Successfully Updated Course', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseUpdateLoading(false));
}

function* courseInsertRequestSaga({ accessToken, payload }) {
  yield put(coursesActions.requestCourseInsertLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseInsertRequest(accessToken, payload);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCourseChange(data));
    yield put(systemActions.addSystemNotification('Successfully Inserted Course', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseInsertLoading(false));
}

function* courseModulesRequestSaga({ accessToken, courseNo }) {
  yield put(coursesActions.requestAllCourseModulesLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseModulesRequest(accessToken, courseNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setAllCourseModules(data));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestAllCourseModulesLoading(false));
}

export function* watchCoursesSagas() {
  yield takeEvery(coursesActions.REQUEST_ALL_COURSES, coursesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_ALL_COURSE_DIFFICULTIES, getAllCourseDifficultiesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_UPDATE, courseUpdateRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_INSERT, courseInsertRequestSaga);
  yield takeEvery(coursesActions.REQUEST_ALL_COURSE_MODULES, courseModulesRequestSaga);
}
