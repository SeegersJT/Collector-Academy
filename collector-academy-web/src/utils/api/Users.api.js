import {
  API_PREFIX,
  getAuthHeaders,
  getContentTypeFormDataHeaders,
  getHttpDeleteOptions,
  getHttpGetOptions,
  getHttpPostData,
  getHttpPutData
} from './GenericWebRequest.api';

export const getUserEndpoint = () => `${API_PREFIX}/user`;
export const getUsersEndpoint = () => `${getUserEndpoint()}/all`;
export const getUsersResetPasswordEndpoint = () => `${getUserEndpoint()}/password-reset`;
export const getAddUsersFileUploadValidateEndpoint = () => `${getUserEndpoint()}/file-upload/validate`;

export const getUsersRequest = (accessToken) => [getUsersEndpoint(), getHttpGetOptions(getAuthHeaders(accessToken))];

export const getUpdateUsersRequest = (accessToken, employeeNo, payload) => [
  getUserEndpoint(),
  getHttpPutData(payload, getAuthHeaders(accessToken), { employeeNo })
];

export const getUsersResetPasswordRequest = (accessToken, employeeNo) => [
  getUsersResetPasswordEndpoint(),
  getHttpPostData(null, getAuthHeaders(accessToken), { employeeNo })
];

export const getUsersDeleteRequest = (accessToken, employeeNo) => [
  getUserEndpoint(),
  getHttpDeleteOptions(getAuthHeaders(accessToken), { employeeNo })
];

export const getAddUsersFileUploadValidateRequest = (accessToken, formData) => [
  getAddUsersFileUploadValidateEndpoint(),
  getHttpPostData(formData, { ...getAuthHeaders(accessToken), ...getContentTypeFormDataHeaders() })
];
