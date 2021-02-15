import {
    RECEIVE_SONGS,
    RECEIVE_SONG
} from "../actions/song_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            return Object.assign({}, state, {currentSong: action.song})
        default:
            return state;
    }
}