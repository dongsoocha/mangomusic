import * as SongsAPI from "../util/songs_api_util";

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';


export const receiveSongs = songs => {
    return {
        type: RECEIVE_SONGS,
        songs
    }
}

export const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song
    }
}




export const fetchSongs = (albumId) => dispatch => {
    return SongsAPI.receiveSongs(albumId)
        .then(songs => dispatch(receiveSongs(songs)));
};

export const fetchCurrentSong = (songId) => dispatch => {
    return SongsAPI.receiveSong(songId)
        .then(song => dispatch(receiveSong(song)));
};