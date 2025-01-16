export const RESET_COURSES = '[COURSES] RESET COURSES';

export const REQUEST_ALL_COURSES = '[COURSES] ALL COURSES - REQUEST';
export const REQUEST_ALL_COURSES_LOADING = '[COURSES] ALL COURSES - REQUEST - LOADING';
export const SET_ALL_COURSES = '[COURSES] ALL COURSES - SET';

export const SET_SELECTED_COURSE = '[COURSES] SELECTED COURSE - SET';

export const REQUEST_ALL_COURSE_DIFFICULTIES = '[COURSES] ALL COURSE DIFFICULTIES - REQUEST';
export const REQUEST_ALL_COURSE_DIFFICULTIES_LOADING = '[COURSES] ALL COURSE DIFFICULTIES - REQUEST - LOADING';
export const SET_ALL_COURSE_DIFFICULTIES = '[COURSES] ALL COURSE DIFFICULTIES - SET';

export const REQUEST_COURSE_UPDATE = '[COURSES] COURSE UPDATE - REQUEST';
export const REQUEST_COURSE_UPDATE_LOADING = '[COURSES] COURSE UPDATE - REQUEST - LOADING';
export const SET_COURSE_CHANGE = '[COURSES] COURSE CHANGE - SET';

export const REQUEST_COURSE_INSERT = '[COURSES] COURSE INSERT - REQUEST';
export const REQUEST_COURSE_INSERT_LOADING = '[COURSES] COURSE INSERT - REQUEST - LOADING';
export const SET_COURSE_INSERT = '[COURSES] COURSE INSERT - SET';

export const REQUEST_ALL_COURSE_MODULES = '[COURSES] ALL COURSE MODULES - REQUEST';
export const REQUEST_ALL_COURSE_MODULES_LOADING = '[COURSES] ALL COURSE MODULES - REQUEST - LOADING';
export const SET_ALL_COURSE_MODULES = '[COURSES] ALL COURSE MODULES - SET';

export const SET_SELECTED_COURSE_MODULE = '[COURSES] SELECTED COURSE MODULE - SET';

export const resetCourses = () => ({
  type: RESET_COURSES
});

export const requestAllCourses = (accessToken) => ({
  type: REQUEST_ALL_COURSES,
  accessToken
});

export const requestAllCoursesLoading = (loading) => ({
  type: REQUEST_ALL_COURSES_LOADING,
  loading
});

export const setAllCourses = (payload) => ({
  type: SET_ALL_COURSES,
  payload
});

export const setSelectedCourse = (payload) => ({
  type: SET_SELECTED_COURSE,
  payload
});

export const requestAllCourseDifficulties = (accessToken) => ({
  type: REQUEST_ALL_COURSE_DIFFICULTIES,
  accessToken
});

export const requestAllCourseDifficultiesLoading = (loaidng) => ({
  type: REQUEST_ALL_COURSE_DIFFICULTIES_LOADING,
  loaidng
});

export const setAllCourseDifficulties = (payload) => ({
  type: SET_ALL_COURSE_DIFFICULTIES,
  payload
});

export const requestCourseUpdate = (accessToken, payload, courseNo) => ({
  type: REQUEST_COURSE_UPDATE,
  accessToken,
  payload,
  courseNo
});

export const requestCourseUpdateLoading = (loading) => ({
  type: REQUEST_COURSE_UPDATE_LOADING,
  loading
});

export const setCourseChange = (payload) => ({
  type: SET_COURSE_CHANGE,
  payload
});

export const requestCourseInsert = (accessToken, payload) => ({
  type: REQUEST_COURSE_INSERT,
  accessToken,
  payload
});

export const requestCourseInsertLoading = (loading) => ({
  type: REQUEST_COURSE_INSERT_LOADING,
  loading
});

export const setCourseInsert = (payload) => ({
  type: SET_COURSE_INSERT,
  payload
});

export const requestAllCourseModules = (accessToken, courseNo) => ({
  type: REQUEST_ALL_COURSE_MODULES,
  accessToken,
  courseNo
});

export const requestAllCourseModulesLoading = (loading) => ({
  type: REQUEST_ALL_COURSE_MODULES_LOADING,
  loading
});

export const setAllCourseModules = (payload) => ({
  type: SET_ALL_COURSE_MODULES,
  payload
});

export const setSelectedCourseModule = (payload) => ({
  type: SET_SELECTED_COURSE_MODULE,
  payload
});
