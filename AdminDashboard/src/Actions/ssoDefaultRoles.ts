import * as types from '../constants/ssoDefaultRoles';
import PositiveNumber from 'Common/Types/PositiveNumber';
import BackendAPI from 'CommonUI/src/utils/api/backend';
import { Dispatch } from 'redux';

export const fetchSsoDefaultRolesRequest = (): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLES_REQUEST,
    };
};

export const fetchSsoDefaultRolesSuccess = (payload: $TSFixMe): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLES_SUCCESS,
        payload,
    };
};

export const fetchSsoDefaultRolesError = (payload: $TSFixMe): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLES_FAILURE,
        payload,
    };
};

export const fetchSsoDefaultRoles =
    (skip: PositiveNumber, limit: PositiveNumber) =>
    async (dispatch: Dispatch) => {
        skip = skip ? parseInt(skip) : 0;
        limit = limit ? parseInt(limit) : 10;
        dispatch(fetchSsoDefaultRolesRequest());
        try {
            const response = await BackendAPI.get(
                `ssoDefaultRoles/?skip=${skip}&limit=${limit}`
            );

            return dispatch(fetchSsoDefaultRolesSuccess(response.data));
        } catch (error) {
            let errorMsg;
            if (error && error.response && error.response.data)
                errorMsg = error.response.data;
            if (error && error.data) {
                errorMsg = error.data;
            }
            if (error && error.message) {
                errorMsg = error.message;
            } else {
                errorMsg = 'Network Error';
            }
            return dispatch(fetchSsoDefaultRolesError(errorMsg));
        }
    };

export const fetchSsoDefaultRoleRequest = (): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLE_REQUEST,
    };
};

export const fetchSsoDefaultRoleSuccess = (payload: $TSFixMe): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLE_SUCCESS,
        payload,
    };
};

export const fetchSsoDefaultRoleError = (payload: $TSFixMe): void => {
    return {
        type: types.FETCH_SSO_DEFAULT_ROLE_FAILURE,
        payload,
    };
};

export const fetchSsoDefaultRole =
    (ssoDefaultRoleId: $TSFixMe) => async (dispatch: Dispatch) => {
        dispatch(fetchSsoDefaultRoleRequest());
        try {
            const response = await BackendAPI.get(
                `ssoDefaultRoles/${ssoDefaultRoleId}`
            );

            dispatch(fetchSsoDefaultRoleSuccess(response.data));
        } catch (error) {
            let errorMsg;
            if (error && error.response && error.response.data)
                errorMsg = error.response.data;
            if (error && error.data) {
                errorMsg = error.data;
            }
            if (error && error.message) {
                errorMsg = error.message;
            } else {
                errorMsg = 'Network Error';
            }
            dispatch(fetchSsoDefaultRoleError(errorMsg));
        }
    };

export const deleteSsoDefaultRoleRequest = (): void => {
    return {
        type: types.DELETE_SSO_DEFAULT_ROLE_REQUEST,
    };
};

export const deleteSsoDefaultRoleSuccess = (payload: $TSFixMe): void => {
    return {
        type: types.DELETE_SSO_DEFAULT_ROLE_SUCCESS,
        payload,
    };
};

export const deleteSsoDefaultRoleError = (payload: $TSFixMe): void => {
    return {
        type: types.DELETE_SSO_DEFAULT_ROLE_FAILED,
        payload,
    };
};

export const deleteSsoDefaultRole =
    (ssoId: $TSFixMe) => async (dispatch: Dispatch) => {
        dispatch(deleteSsoDefaultRoleRequest());
        try {
            const response = await delete `ssoDefaultRoles/${ssoId}`;

            dispatch(deleteSsoDefaultRoleSuccess(response.data));

            dispatch(fetchSsoDefaultRoles());
        } catch (error) {
            let errorMsg;
            if (error && error.response && error.response.data)
                errorMsg = error.response.data;
            if (error && error.data) {
                errorMsg = error.data;
            }
            if (error && error.message) {
                errorMsg = error.message;
            } else {
                errorMsg = 'Network Error';
            }
            dispatch(deleteSsoDefaultRoleError(errorMsg));
        }
    };

export const addSsoDefaultRoleRequest = (): void => {
    return {
        type: types.ADD_SSO_DEFAULT_ROLE_REQUEST,
    };
};

export const addSsoDefaultRoleSuccess = (): void => {
    return {
        type: types.ADD_SSO_DEFAULT_ROLE_SUCCESS,
    };
};

export const addSsoDefaultRoleError = (payload: $TSFixMe): void => {
    return {
        type: types.ADD_SSO_DEFAULT_ROLE_FAILED,
        payload,
    };
};

export const addSsoDefaultRole =
    ({ data }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(addSsoDefaultRoleRequest());
        try {
            await BackendAPI.post(`ssoDefaultRoles/`, data);
            dispatch(addSsoDefaultRoleSuccess());
            return true;
        } catch (error) {
            let errorMsg;
            if (error && error.response && error.response.data)
                errorMsg = error.response.data;
            if (error && error.data) {
                errorMsg = error.data;
            }
            if (error && error.message) {
                errorMsg = error.message;
            } else {
                errorMsg = 'Network Error';
            }
            dispatch(addSsoDefaultRoleError(errorMsg));
            return false;
        }
    };

export const updateSsoDefaultRoleRequest = (): void => {
    return {
        type: types.UPDATE_SSO_DEFAULT_ROLE_REQUEST,
    };
};

export const updateSsoDefaultRoleSuccess = (): void => {
    return {
        type: types.UPDATE_SSO_DEFAULT_ROLE_SUCCESS,
    };
};

export const updateSsoDefaultRoleError = (payload: $TSFixMe): void => {
    return {
        type: types.UPDATE_SSO_DEFAULT_ROLE_FAILURE,
        payload,
    };
};

export const updateSsoDefaultRole =
    ({ id, data }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(updateSsoDefaultRoleRequest());
        try {
            await BackendAPI.put(`ssoDefaultRoles/${id}`, data);
            dispatch(updateSsoDefaultRoleSuccess());
            return true;
        } catch (error) {
            let errorMsg;
            if (error && error.response && error.response.data)
                errorMsg = error.response.data;
            if (error && error.data) {
                errorMsg = error.data;
            }
            if (error && error.message) {
                errorMsg = error.message;
            } else {
                errorMsg = 'Network Error';
            }
            dispatch(updateSsoDefaultRoleError(errorMsg));
            return false;
        }
    };

export const paginate = (type: $TSFixMe): void => {
    if (type === 'next') {
        return {
            type: types.NEXT_PAGE,
        };
    } else if (type === 'prev') {
        return {
            type: types.PREV_PAGE,
        };
    }
};