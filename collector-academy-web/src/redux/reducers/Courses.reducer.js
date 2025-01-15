import * as coursesActions from 'redux/actions/Courses.action';
import * as courseConstants from './constants/Courses.constant';

const initialState = {
  courses: [],
  courseDifficulties: [],
  selectedCourse: null,
  coursesLoading: false,
  courseDifficultiesLoading: false,
  courseUpdateLoading: false
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesActions.SET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload.map((course) => courseConstants.formatConstantCourses(course))
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

    case coursesActions.SET_COURSE_UPDATE: {
      const updatedCourse = state.courses.map((course) =>
        course.courseNo === action.payload.courseNo ? { ...action.payload } : { ...course }
      );

      return {
        ...state,
        courses: updatedCourse
      };
    }

    default:
      return state;
  }
};

export default coursesReducer;
