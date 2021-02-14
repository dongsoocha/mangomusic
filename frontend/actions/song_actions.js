import * as SongsAPI from "../util/albums_api_util";

export const RECEIVE_SONGS = 'RECEIVE_SONGS'

export const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
}


export const fetchSongs = (albumId) => dispatch => {
    return SongsAPI.receiveSongs(albumId)
        .then(songs => dispatch(receiveSongs(songs)));
};

