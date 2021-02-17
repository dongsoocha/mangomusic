import { RECEIVE_CURRENT_USER, 
         SIGNOUT_CURRENT_USER, 
         TOGGLE_PLAY_STATE
        } from "../actions/session_actions";
import { RECEIVE_SONG } from "../actions/song_actions";


const _nullSession = {
    id: null,
    currentSong: null,
    playState: false,
};

export default (state= _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.user.id });
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_SONG:
            debugger
            return !state.currentSong || state.currentSong.id !== action.song.id ? 
                Object.assign({}, state, { currentSong: action.song, playState: true }) : 
                state.playState ? 
                    Object.assign({}, state, { playState: false }) : 
                    Object.assign({}, state, { playState: true });
        case TOGGLE_PLAY_STATE:
            return state.playState ? Object.assign({}, state, { playState: false }) : Object.assign({}, state, { playState: true })
        default: 
            return state;
    }
};