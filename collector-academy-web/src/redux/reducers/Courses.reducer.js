import * as coursesActions from 'redux/actions/Courses.action';
import * as courseConstants from './constants/Courses.constant';

const initialState = {
  courses: [],
  courseModules: [],
  coursePages: [],
  courseDifficulties: [],
  selectedCourse: null,
  selectedCourseModule: null,
  selectedCoursePage: null,
  coursesLoading: false,
  courseModulesLoading: false,
  coursePagesLoading: false,
  courseDifficultiesLoading: false,
  courseUpdateLoading: false,
  courseInsertLoading: false,
  courseDeleteLoading: false,
  courseModuleUpdateLoading: false,
  courseModuleInsertLoading: false,
  courseModuleDeleteLoading: false,
  coursePageUpdateLoading: false,
  coursePageInsertLoading: false,
  coursePageDeleteLoading: false
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesActions.RESET_COURSE_EDITOR:
      return {
        ...state,
        // RESET COURSES
        courses: initialState.courses,
        selectedCourse: initialState.selectedCourse,
        coursesLoading: initialState.coursesLoading,
        courseUpdateLoading: initialState.courseUpdateLoading,
        courseInsertLoading: initialState.courseInsertLoading,
        courseDeleteLoading: initialState.courseDeleteLoading,
        // RESET MODULES
        courseModules: initialState.courseModules,
        selectedCourseModule: initialState.selectedCourseModule,
        courseModulesLoading: initialState.courseModulesLoading,
        courseModuleUpdateLoading: initialState.courseModuleUpdateLoading,
        courseModuleInsertLoading: initialState.courseModuleInsertLoading,
        courseModuleDeleteLoading: initialState.courseModuleDeleteLoading,
        // RESET PAGES
        coursePages: initialState.coursePages,
        selectedCoursePage: initialState.selectedCoursePage,
        coursePagesLoading: initialState.coursePagesLoading,
        coursePageUpdateLoading: initialState.coursePageUpdateLoading,
        coursePageInsertLoading: initialState.coursePageInsertLoading,
        coursePageDeleteLoading: initialState.coursePageDeleteLoading,
        // RESET DIFFICULTIES
        courseDifficulties: initialState.courseDifficulties,
        courseDifficultiesLoading: initialState.courseDifficultiesLoading
      };

    case coursesActions.RESET_MODULE_EDITOR:
      return {
        ...state,
        courseModules: initialState.courseModules,
        selectedCourseModule: initialState.selectedCourseModule,
        courseModulesLoading: initialState.courseModulesLoading,
        courseModuleUpdateLoading: initialState.courseModuleUpdateLoading,
        courseModuleInsertLoading: initialState.courseModuleInsertLoading,
        courseModuleDeleteLoading: initialState.courseModuleDeleteLoading,
        coursePages: initialState.coursePages,
        selectedCoursePage: initialState.selectedCoursePage,
        coursePagesLoading: initialState.coursePagesLoading,
        coursePageUpdateLoading: initialState.coursePageUpdateLoading,
        coursePageInsertLoading: initialState.coursePageInsertLoading,
        coursePageDeleteLoading: initialState.coursePageDeleteLoading
      };

    case coursesActions.RESET_PAGE_EDITOR:
      return {
        ...state,
        coursePages: initialState.coursePages,
        selectedCoursePage: initialState.selectedCoursePage,
        coursePagesLoading: initialState.coursePagesLoading,
        coursePageUpdateLoading: initialState.coursePageUpdateLoading,
        coursePageInsertLoading: initialState.coursePageInsertLoading,
        coursePageDeleteLoading: initialState.coursePageDeleteLoading
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

    case coursesActions.REQUEST_COURSE_INSERT_LOADING:
      return {
        ...state,
        courseInsertLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_DELETE_LOADING:
      return {
        ...state,
        courseDeleteLoading: action.loading
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

    case coursesActions.REQUEST_COURSE_MODULE_UPDATE_LOADING:
      return {
        ...state,
        courseModuleUpdateLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_MODULE_INSERT_LOADING:
      return {
        ...state,
        courseModuleInsertLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_MODULE_DELETE_LOADING:
      return {
        ...state,
        courseModuleDeleteLoading: action.loading
      };

    case coursesActions.SET_COURSE_MODULE_CHANGE: {
      const courseModuleExists = state.courseModules.some((courseModule) => courseModule.courseModuleNo === action.payload.courseModuleNo);

      const updatedCourseModules = courseModuleExists
        ? state.courseModules.map((courseModule) =>
            courseModule.courseModuleNo === action.payload.courseModuleNo ? { ...action.payload } : { ...courseModule }
          )
        : [...state.courseModules, { ...action.payload }];

      return {
        ...state,
        courseModules: updatedCourseModules,
        selectedCourseModule: action.payload?.courseModuleNo
      };
    }

    case coursesActions.SET_SELECTED_COURSE_PAGE:
      return {
        ...state,
        selectedCoursePage: action.payload
      };

    case coursesActions.REQUEST_ALL_COURSE_PAGES_LOADING:
      return {
        ...state,
        coursePagesLoading: action.payload
      };

    case coursesActions.SET_ALL_COURSE_PAGES:
      return {
        ...state,
        coursePages: action.payload.map((coursePage) => courseConstants.formatConstantCoursePage(coursePage))
      };

    case coursesActions.REQUEST_COURSE_PAGE_UPDATE_LOADING:
      return {
        ...state,
        coursePageUpdateLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_PAGE_INSERT_LOADING:
      return {
        ...state,
        coursePageInsertLoading: action.loading
      };

    case coursesActions.REQUEST_COURSE_PAGE_DELETE_LOADING:
      return {
        ...state,
        coursePageDeleteLoading: action.loading
      };

    case coursesActions.SET_COURSE_PAGE_CHANGE: {
      const coursePageExists = state.coursePages.some((coursePage) => coursePage.coursePageNo === action.payload.coursePageNo);

      const updatedCoursePages = coursePageExists
        ? state.coursePages.map((coursePage) =>
            coursePage.coursePageNo === action.payload.coursePageNo ? { ...action.payload } : { ...coursePage }
          )
        : [...state.coursePages, { ...action.payload }];

      return {
        ...state,
        coursePages: updatedCoursePages,
        selectedCoursePage: action.payload?.coursePageNo
      };
    }

    default:
      return state;
  }
};

export default coursesReducer;
