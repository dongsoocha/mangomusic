import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST,
    DELETE_PLAYLIST,
} from '../actions/playlist_actions';

const PlaylistReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, { [action.playlist.id]: action.playlist});
        case DELETE_PLAYLIST:
            let nextState = Object.assign({}, state);
            delete nextState[action.playlist.id];
            return nextState;
        default:
            return state;
    }
};

export default PlaylistReducer;