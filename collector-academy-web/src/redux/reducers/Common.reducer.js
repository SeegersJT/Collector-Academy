import {
  REQUEST_ALL_BRANCHES_LOADING,
  REQUEST_ALL_EMPLOYEE_TYPES_LOADING,
  REQUEST_ALL_GENDERS_LOADING,
  REQUEST_ALL_PERFORMANCE_MANAGERS_LOADING,
  SET_ALL_EMPLOYEE_TYPES,
  SET_ALL_GENDERS,
  SET_ALL_PERFORMANCE_MANAGERS,
  SET_BRANCHES
} from 'redux/actions/Common.action';
import {
  formatConstantBranch,
  formatConstantEmployeeTypes,
  formatConstantGender,
  formatConstantPerformanceManagers
} from './constants/Common.constant';

const initialState = {
  branches: [],
  genders: [],
  employeeTypes: [],
  performanceManagers: [],

  branchesLoading: false,
  gendersLoading: false,
  employeeTypesLoading: false,
  performanceManagersLoading: false
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANCHES:
      return {
        ...state,
        branches: action.payload.map((branch) => formatConstantBranch(branch))
      };

    case REQUEST_ALL_BRANCHES_LOADING:
      return {
        ...state,
        branchesLoading: action.loading
      };

    case SET_ALL_GENDERS:
      return {
        ...state,
        genders: action.payload.map((gender) => formatConstantGender(gender))
      };

    case REQUEST_ALL_GENDERS_LOADING:
      return {
        ...state,
        gendersLoading: action.loading
      };

    case SET_ALL_EMPLOYEE_TYPES:
      return {
        ...state,
        employeeTypes: action.payload.map((employeeType) => formatConstantEmployeeTypes(employeeType))
      };

    case REQUEST_ALL_EMPLOYEE_TYPES_LOADING:
      return {
        ...state,
        employeeTypesLoading: action.loading
      };

    case SET_ALL_PERFORMANCE_MANAGERS:
      return {
        ...state,
        performanceManagers: action.payload.map((performanceManager) => formatConstantPerformanceManagers(performanceManager))
      };

    case REQUEST_ALL_PERFORMANCE_MANAGERS_LOADING:
      return {
        ...state,
        performanceManagersLoading: action.loading
      };

    default:
      return state;
  }
};

export default commonReducer;
