export const RESET_COURSE_EDITOR = '[COURSES] COURSE EDITOR - RESET';
export const RESET_MODULE_EDITOR = '[COURSES] MODULE EDITOR - RESET';
export const RESET_PAGE_EDITOR = '[COURSES] PAGE EDITOR - RESET';

export const REQUEST_ALL_COURSES = '[COURSES] ALL COURSES - REQUEST';
export const REQUEST_ALL_COURSES_LOADING = '[COURSES] ALL COURSES - REQUEST - LOADING';
export const SET_ALL_COURSES = '[COURSES] ALL COURSES - SET';

export const SET_SELECTED_COURSE = '[COURSES] SELECTED COURSE - SET';

export const REQUEST_ALL_COURSE_DIFFICULTIES = '[COURSES] ALL COURSE DIFFICULTIES - REQUEST';
export const REQUEST_ALL_COURSE_DIFFICULTIES_LOADING = '[COURSES] ALL COURSE DIFFICULTIES - REQUEST - LOADING';
export const SET_ALL_COURSE_DIFFICULTIES = '[COURSES] ALL COURSE DIFFICULTIES - SET';

export const REQUEST_COURSE_UPDATE = '[COURSES] COURSE UPDATE - REQUEST';
export const REQUEST_COURSE_UPDATE_LOADING = '[COURSES] COURSE UPDATE - REQUEST - LOADING';
export const REQUEST_COURSE_INSERT = '[COURSES] COURSE INSERT - REQUEST';
export const REQUEST_COURSE_INSERT_LOADING = '[COURSES] COURSE INSERT - REQUEST - LOADING';
export const REQUEST_COURSE_DELETE = '[COURSES] COURSE DELETE - REQUEST';
export const REQUEST_COURSE_DELETE_LOADING = '[COURSES] COURSE DELETE - REQUEST - LOADING';
export const SET_COURSE_CHANGE = '[COURSES] COURSE CHANGE - SET';

export const REQUEST_ALL_COURSE_MODULES = '[COURSES] ALL COURSE MODULES - REQUEST';
export const REQUEST_ALL_COURSE_MODULES_LOADING = '[COURSES] ALL COURSE MODULES - REQUEST - LOADING';
export const SET_ALL_COURSE_MODULES = '[COURSES] ALL COURSE MODULES - SET';

export const SET_SELECTED_COURSE_MODULE = '[COURSES] SELECTED COURSE MODULE - SET';

export const REQUEST_COURSE_MODULE_UPDATE = '[COURSES] COURSE MODULE UPDATE - REQUEST';
export const REQUEST_COURSE_MODULE_UPDATE_LOADING = '[COURSES] COURSE MODULE UPDATE - REQUEST - LOADING';
export const REQUEST_COURSE_MODULE_INSERT = '[COURSES] COURSE MODULE INSERT - REQUEST';
export const REQUEST_COURSE_MODULE_INSERT_LOADING = '[COURSES] COURSE MODULE INSERT - REQUEST - LOADING';
export const REQUEST_COURSE_MODULE_DELETE = '[COURSES] COURSE MODULE DELETE - REQUEST';
export const REQUEST_COURSE_MODULE_DELETE_LOADING = '[COURSES] COURSE MODULE DELETE - REQUEST - LOADING';
export const SET_COURSE_MODULE_CHANGE = '[COURSES] COURSE MODULE CHANGE - SET';

export const SET_SELECTED_COURSE_PAGE = '[COURSES] SELECTED COURSE PAGE - SET';

export const REQUEST_ALL_COURSE_PAGES = '[COURSES] ALL COURSE PAGES - REQUEST';
export const REQUEST_ALL_COURSE_PAGES_LOADING = '[COURSES] ALL COURSE PAGES - REQUEST - LOADING';
export const SET_ALL_COURSE_PAGES = '[COURSES] COURSE PAGES - SET';

export const REQUEST_COURSE_PAGE_UPDATE = '[COURSES] COURSE PAGE UPDATE - REQUEST';
export const REQUEST_COURSE_PAGE_UPDATE_LOADING = '[COURSES] COURSE PAGE UPDATE - REQUEST - LOADING';
export const REQUEST_COURSE_PAGE_INSERT = '[COURSES] COURSE PAGE INSERT - REQUEST';
export const REQUEST_COURSE_PAGE_INSERT_LOADING = '[COURSES] COURSE PAGE INSERT - REQUEST - LOADING';
export const REQUEST_COURSE_PAGE_DELETE = '[COURSES] COURSE PAGE DELETE - REQUEST';
export const REQUEST_COURSE_PAGE_DELETE_LOADING = '[COURSES] COURSE PAGE DELETE - REQUEST - LOADING';
export const SET_COURSE_PAGE_CHANGE = '[COURSES] COURSE PAGE CHANGE - SET';

export const resetCourseEditor = () => ({
  type: RESET_COURSE_EDITOR
});

export const resetModuleEditor = () => ({
  type: RESET_MODULE_EDITOR
});

export const resetPageEditor = () => ({
  type: RESET_PAGE_EDITOR
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

export const requestCourseDelete = (accessToken, courseNo) => ({
  type: REQUEST_COURSE_DELETE,
  accessToken,
  courseNo
});

export const requestCourseDeleteLoading = (loading) => ({
  type: REQUEST_COURSE_DELETE_LOADING,
  loading
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

export const requestCourseModuleUpdate = (accessToken, payload, courseModuleNo) => ({
  type: REQUEST_COURSE_MODULE_UPDATE,
  accessToken,
  payload,
  courseModuleNo
});

export const requestCourseModuleUpdateLoading = (loading) => ({
  type: REQUEST_COURSE_MODULE_UPDATE_LOADING,
  loading
});

export const requestCourseModuleInsert = (accessToken, payload, courseNo) => ({
  type: REQUEST_COURSE_MODULE_INSERT,
  accessToken,
  payload,
  courseNo
});

export const requestCourseModuleInsertLoading = (loading) => ({
  type: REQUEST_COURSE_MODULE_INSERT_LOADING,
  loading
});

export const requestCourseModuleDelete = (accessToken, courseModuleNo) => ({
  type: REQUEST_COURSE_MODULE_DELETE,
  accessToken,
  courseModuleNo
});

export const requestCourseModuleDeleteLoading = (loading) => ({
  type: REQUEST_COURSE_MODULE_DELETE_LOADING,
  loading
});

export const setCourseModuleChange = (payload) => ({
  type: SET_COURSE_MODULE_CHANGE,
  payload
});

export const setSelectedCoursePage = (payload) => ({
  type: SET_SELECTED_COURSE_PAGE,
  payload
});

export const requestAllCoursePages = (accessToken, courseModuleNo) => ({
  type: REQUEST_ALL_COURSE_PAGES,
  accessToken,
  courseModuleNo
});

export const requestAllCoursePagesLoading = (loading) => ({
  type: REQUEST_ALL_COURSE_PAGES_LOADING,
  loading
});

export const setAllCoursePages = (payload) => ({
  type: SET_ALL_COURSE_PAGES,
  payload
});

export const requestCoursePageUpdate = (accessToken, payload, coursePageNo) => ({
  type: REQUEST_COURSE_PAGE_UPDATE,
  accessToken,
  payload,
  coursePageNo
});

export const requestCoursePageUpdateLoading = (loading) => ({
  type: REQUEST_COURSE_PAGE_UPDATE_LOADING,
  loading
});

export const requestCoursePageInsert = (accessToken, payload, courseModuleNo) => ({
  type: REQUEST_COURSE_PAGE_INSERT,
  accessToken,
  payload,
  courseModuleNo
});

export const requestCoursePageInsertLoading = (loading) => ({
  type: REQUEST_COURSE_PAGE_INSERT_LOADING,
  loading
});

export const requestCoursePageDelete = (accessToken, coursePageNo) => ({
  type: REQUEST_COURSE_PAGE_DELETE,
  accessToken,
  coursePageNo
});

export const requestCoursePageDeleteLoading = (loading) => ({
  type: REQUEST_COURSE_PAGE_DELETE_LOADING,
  loading
});

export const setCoursePageChange = (payload) => ({
  type: SET_COURSE_PAGE_CHANGE,
  payload
});
