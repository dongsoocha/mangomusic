import {
    RECEIVE_SONGS,
} from "../actions/song_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, action.songs);
        default:
            return state;
    }
}