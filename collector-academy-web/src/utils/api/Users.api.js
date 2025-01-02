import { API_PREFIX, getAuthHeaders, getHttpGetOptions } from './GenericWebRequest.api';

export const getUsersEndpoint = () => `${API_PREFIX}/user/all`;

export const getUsersRequest = (accessToken) => [getUsersEndpoint(), getHttpGetOptions(getAuthHeaders(accessToken))];
