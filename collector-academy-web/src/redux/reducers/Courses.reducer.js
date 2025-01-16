import * as coursesActions from 'redux/actions/Courses.action';
import * as courseConstants from './constants/Courses.constant';

const initialState = {
  courses: [],
  courseModules: [],
  courseDifficulties: [],
  selectedCourse: null,
  selectedCourseModule: null,
  coursesLoading: false,
  courseModulesLoading: false,
  courseDifficultiesLoading: false,
  courseUpdateLoading: false,
  courseInsertLoading: false,
  courseModuleUpdateLoading: false,
  courseModuleInsertLoading: false
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesActions.RESET_COURSES:
      return {
        ...initialState
      };

    case coursesActions.SET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload.map((course) => courseConstants.formatConstantCourse(course))
      };

    case coursesActions.REQUEST_ALL_COURSES_LOADING:
      return {
        ...state,
        coursesLoading: action.loading
      };

    case coursesActions.SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload
      };

    case coursesActions.SET_ALL_COURSE_DIFFICULTIES:
      return {
        ...state,
        courseDifficulties: action.payload.map((courseDifficulty) => courseConstants.formatConstantCourseDifficulties(courseDifficulty))
      };

    case coursesActions.REQUEST_ALL_COURSE_DIFFICULTIES_LOADING:
      return {
        ...state,
        courseDifficultiesLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_UPDATE_LOADING:
      return {
        ...state,
        courseUpdateLoading: action.loading
      };

    case coursesActions.SET_COURSE_CHANGE: {
      const courseExists = state.courses.some((course) => course.courseNo === action.payload.courseNo);

      const updatedCourses = courseExists
        ? state.courses.map((course) => (course.courseNo === action.payload.courseNo ? { ...action.payload } : { ...course }))
        : [...state.courses, { ...action.payload }];

      return {
        ...state,
        courses: updatedCourses,
        selectedCourse: action.payload?.courseNo
      };
    }

    case coursesActions.REQUEST_COURSE_INSERT_LOADING:
      return {
        ...state,
        courseInsertLoading: action.loading
      };

    case coursesActions.SET_ALL_COURSE_MODULES:
      return {
        ...state,
        courseModules: action.payload.map((courseModule) => courseConstants.formatConstantCourseModule(courseModule))
      };

    case coursesActions.REQUEST_ALL_COURSE_MODULES_LOADING:
      return {
        ...state,
        courseModulesLoading: action.loading
      };

    case coursesActions.SET_SELECTED_COURSE_MODULE:
      return {
        ...state,
        selectedCourseModule: action.payload
      };

    default:
      return state;
  }
};

export default coursesReducer;
