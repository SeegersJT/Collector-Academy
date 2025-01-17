import {
  API_PREFIX,
  getAuthHeaders,
  getHttpDeleteOptions,
  getHttpGetOptions,
  getHttpPostData,
  getHttpPutData
} from './GenericWebRequest.api';

export const getCourseEndpoint = () => `${API_PREFIX}/course`;
export const getAllCoursesEndpoint = () => `${getCourseEndpoint()}/all`;
export const getCourseModuleEndpoint = () => `${getCourseEndpoint()}/module`;
export const getAllCourseModulesEndpoint = () => `${getCourseModuleEndpoint()}/all`;
export const getCoursePageEndpoint = () => `${getCourseEndpoint()}/page`;
export const getAllCoursePagesEndpoint = () => `${getCoursePageEndpoint()}/all`;
export const getAllCourseDifficultiesEndpoint = () => `${getCourseEndpoint()}/difficulty/all`;

export const getAllCoursesRequest = (accessToken) => [getAllCoursesEndpoint(), getHttpGetOptions(getAuthHeaders(accessToken))];

export const getAllCourseDifficultiesRequest = (accessToken) => [
  getAllCourseDifficultiesEndpoint(),
  getHttpGetOptions(getAuthHeaders(accessToken))
];

export const getCourseUpdateRequest = (accessToken, payload, courseNo) => [
  getCourseEndpoint(),
  getHttpPutData(payload, getAuthHeaders(accessToken), { courseNo })
];

export const getCourseInsertRequest = (accessToken, payload) => [
  getCourseEndpoint(),
  getHttpPostData(payload, getAuthHeaders(accessToken))
];

export const getCourseDeleteRequest = (accessToken, courseNo) => [
  getCourseEndpoint(),
  getHttpDeleteOptions(getAuthHeaders(accessToken), { courseNo })
];

export const getCourseModulesRequest = (accessToken, courseNo) => [
  getAllCourseModulesEndpoint(),
  getHttpGetOptions(getAuthHeaders(accessToken), { courseNo })
];

export const getCourseModuleUpdateRequest = (accessToken, payload, courseModuleNo) => [
  getCourseModuleEndpoint(),
  getHttpPutData(payload, getAuthHeaders(accessToken), { courseModuleNo })
];

export const getCourseModuleInsertRequest = (accessToken, payload, courseNo) => [
  getCourseModuleEndpoint(),
  getHttpPostData(payload, getAuthHeaders(accessToken), { courseNo })
];

export const getCourseModuleDeleteRequest = (accessToken, courseModuleNo) => [
  getCourseModuleEndpoint(),
  getHttpDeleteOptions(getAuthHeaders(accessToken), { courseModuleNo })
];

export const getCoursePagesRequest = (accessToken, courseModuleNo) => [
  getAllCoursePagesEndpoint(),
  getHttpGetOptions(getAuthHeaders(accessToken), { courseModuleNo })
];

export const getCoursePageUpdateRequest = (accessToken, payload, coursePageNo) => [
  getCoursePageEndpoint(),
  getHttpPutData(payload, getAuthHeaders(accessToken), { coursePageNo })
];

export const getCoursePageInsertRequest = (accessToken, payload, courseModuleNo) => [
  getCoursePageEndpoint(),
  getHttpPostData(payload, getAuthHeaders(accessToken), { courseModuleNo })
];

export const getCoursePageDeleteRequest = (accessToken, coursePageNo) => [
  getCoursePageEndpoint(),
  getHttpDeleteOptions(getAuthHeaders(accessToken), { coursePageNo })
];
