import { RECEIVE_ALBUMS,
         RECEIVE_ALBUM
        } from "../actions/album_actions";

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return Object.assign({}, action.albums)
        case RECEIVE_ALBUM:
            return Object.assign({}, action.album)
        default: 
            return state;
    }
}