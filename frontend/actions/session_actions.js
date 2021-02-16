import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const TOGGLE_PLAY_STATE = 'TOGGLE_PLAY_STATE';

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

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    };
};

export const signup = user => dispatch => {
    return SessionAPI.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};
export const login = user => dispatch => {
    return SessionAPI.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionAPI.logout()
        .then(() => dispatch(signoutCurrentUser()));
};

export const togglePlayState = (songId) => {
    return {
        type: TOGGLE_PLAY_STATE,
        songId
    }
}

const demoUser = {email: "mango@mango.com", password: "ilovemusic"}

export const demoLogin = () => dispatch => {
    return SessionAPI.login(demoUser)
        .then(user => dispatch(receiveCurrentUser(user)));
};