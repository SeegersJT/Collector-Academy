import { API_PREFIX, getAuthHeaders, getHttpGetOptions, getHttpPostData, getHttpPutData } from './GenericWebRequest.api';

export const getCourseEndpoint = () => `${API_PREFIX}/course`;
export const getAllCoursesEndpoint = () => `${getCourseEndpoint()}/all`;
export const getAllCourseModulesEndpoint = () => `${getCourseEndpoint()}/module/all`;
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

export const getCourseModulesRequest = (accessToken, courseNo) => [
  getAllCourseModulesEndpoint(),
  getHttpGetOptions(getAuthHeaders(accessToken), { courseNo })
];
