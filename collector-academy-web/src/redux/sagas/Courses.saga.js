import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as coursesActions from 'redux/actions/Courses.action';
import * as systemActions from 'redux/actions/System.action';
import * as api from 'utils/api/Courses.api';
import { Utils } from 'utils/Utils';
import { SNACK_ERROR, SNACK_SUCCESS } from 'redux/reducers/System.reducer';
import { navigateTo } from 'utils/NavigateService';

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

function* courseDeleteRequestSaga({ accessToken, courseNo }) {
  yield put(coursesActions.requestCourseDeleteLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseDeleteRequest(accessToken, courseNo);

    yield call(axios, endpoint, requestOptions);

    navigateTo('/dashboard/courses');
    yield put(systemActions.addSystemNotification('Successfully Deleted Course', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseDeleteLoading(false));
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

function* courseModuleUpdateRequestSaga({ accessToken, payload, courseModuleNo }) {
  yield put(coursesActions.requestCourseModuleUpdateLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseModuleUpdateRequest(accessToken, payload, courseModuleNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCourseModuleChange(data));
    yield put(systemActions.addSystemNotification('Successfully Updated Course Module', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseModuleUpdateLoading(false));
}

function* courseModuleInsertRequestSaga({ accessToken, payload, courseNo }) {
  yield put(coursesActions.requestCourseModuleInsertLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseModuleInsertRequest(accessToken, payload, courseNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCourseModuleChange(data));
    yield put(systemActions.addSystemNotification('Successfully Inserted Course Module', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseModuleInsertLoading(false));
}

function* courseModuleDeleteRequestSaga({ accessToken, courseModuleNo }) {
  yield put(coursesActions.requestCourseModuleDeleteLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCourseModuleDeleteRequest(accessToken, courseModuleNo);

    yield call(axios, endpoint, requestOptions);

    navigateTo('/dashboard/courses/course-editor');
    yield put(systemActions.addSystemNotification('Successfully Deleted Course Module', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCourseModuleDeleteLoading(false));
}

function* coursePagesRequestSaga({ accessToken, courseModuleNo }) {
  yield put(coursesActions.requestAllCoursePagesLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCoursePagesRequest(accessToken, courseModuleNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setAllCoursePages(data));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestAllCoursePagesLoading(false));
}

function* coursePageUpdateRequestSaga({ accessToken, payload, coursePageNo }) {
  yield put(coursesActions.requestCoursePageUpdateLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCoursePageUpdateRequest(accessToken, payload, coursePageNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCoursePageChange(data));
    yield put(systemActions.addSystemNotification('Successfully Updated Course Page', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCoursePageUpdateLoading(false));
}

function* coursePageInsertRequestSaga({ accessToken, payload, courseModuleNo }) {
  yield put(coursesActions.requestCoursePageInsertLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCoursePageInsertRequest(accessToken, payload, courseModuleNo);

    const { data } = yield call(axios, endpoint, requestOptions);

    yield put(coursesActions.setCoursePageChange(data));
    yield put(systemActions.addSystemNotification('Successfully Inserted Course Page', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCoursePageInsertLoading(false));
}

function* coursePageDeleteRequestSaga({ accessToken, coursePageNo }) {
  yield put(coursesActions.requestCoursePageDeleteLoading(true));

  try {
    const [endpoint, requestOptions] = api.getCoursePageDeleteRequest(accessToken, coursePageNo);

    yield call(axios, endpoint, requestOptions);

    navigateTo('/dashboard/courses/course-editor/module-editor');
    yield put(systemActions.addSystemNotification('Successfully Deleted Course Page', SNACK_SUCCESS));
  } catch (error) {
    if (!Utils.isUndefined(error.response.data.message)) {
      yield put(systemActions.addSystemNotification(error.response.data.message, SNACK_ERROR));
    } else {
      yield put(systemActions.addSystemNotification('Server is Unavailable', SNACK_ERROR));
    }
  }

  yield put(coursesActions.requestCoursePageDeleteLoading(false));
}

export function* watchCoursesSagas() {
  yield takeEvery(coursesActions.REQUEST_ALL_COURSES, coursesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_ALL_COURSE_DIFFICULTIES, getAllCourseDifficultiesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_UPDATE, courseUpdateRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_INSERT, courseInsertRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_DELETE, courseDeleteRequestSaga);
  yield takeEvery(coursesActions.REQUEST_ALL_COURSE_MODULES, courseModulesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_MODULE_UPDATE, courseModuleUpdateRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_MODULE_INSERT, courseModuleInsertRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_MODULE_DELETE, courseModuleDeleteRequestSaga);
  yield takeEvery(coursesActions.REQUEST_ALL_COURSE_PAGES, coursePagesRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_PAGE_UPDATE, coursePageUpdateRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_PAGE_INSERT, coursePageInsertRequestSaga);
  yield takeEvery(coursesActions.REQUEST_COURSE_PAGE_DELETE, coursePageDeleteRequestSaga);
}
