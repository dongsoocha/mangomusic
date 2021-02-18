import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST
} from '../actions/playlist_actions';

const PlaylistReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return Object.assign({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, { [action.playlist.id]: action.playlist});
        default:
            return state;
    }
};

export default PlaylistReducer;