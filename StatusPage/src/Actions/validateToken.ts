import BackendAPI from 'CommonUI/src/utils/api/backend';
import { Dispatch } from 'redux';
import * as types from '../constants/validateToken';
import ErrorPayload from 'CommonUI/src/payload-types/error';
/*
 * There are three possible states for our validateToken
 * process and we need actions for each of them
 */

export const validateTokenRequest = (promise: $TSFixMe): void => {
    return {
        type: types.VALIDATE_TOKEN_REQUEST,
        payload: promise,
    };
};

export const validateTokenError = (error: ErrorPayload): void => {
    return {
        type: types.VALIDATE_TOKEN_FAILED,
        payload: error,
    };
};

export const validateTokenSuccess = (accessToken: $TSFixMe): void => {
    sessionStorage.setItem('accessToken', accessToken);

    return {
        type: types.VALIDATE_TOKEN_SUCCESS,
        payload: accessToken,
    };
};

export const resetvalidateToken = (): void => ({
    type: types.RESET_VALIDATE_TOKEN,
});

// Calls the API to register a user.
export const validateToken = (token: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.post(
            `user/isAuthenticated?accessToken=${token}`,
            {}
        );

        dispatch(validateTokenRequest(promise));

        promise.then(
            user => {
                dispatch(validateTokenSuccess(user.data.tokens.jwtAccessToken));
            },
            error => {
                dispatch(validateTokenError(error));
            }
        );

        return promise;
    };
};