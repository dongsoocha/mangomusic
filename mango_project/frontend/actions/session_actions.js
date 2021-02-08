import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const signoutCurrentUser = () => {
    return {
        type: SIGNOUT_CURRENT_USER
    };
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const signup = user => dispatch => {
    return SessionAPI.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};
export const login = user => dispatch => {
    return SessionAPI.login(user)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
    return SessionAPI.logout()
        .then(() => dispatch(signoutCurrentUser()));
};

