import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const signoutCurrentUser = () => {
    return {
        type: SIGNOUT_CURRENT_USER
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

