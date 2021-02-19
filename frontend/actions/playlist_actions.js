import * as PlaylistAPI from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

const receiveAllPlaylists = playlists => {
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    };
};

const receivePlaylist = playlist => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    };
};

export const fetchPlaylists = () => dispatch => {
    return PlaylistAPI.fetchPlaylists()
        .then((playlists={}) => dispatch(receiveAllPlaylists(playlists)));
}

export const fetchPlaylist = playlistId => dispatch => {
    return PlaylistAPI.fetchPlaylist(playlistId)
        .then(playlist => dispatch(receivePlaylist(playlist)));
}

export const createPlaylist = playlist => dispatch => {
    return PlaylistAPI.createPlaylist(playlist)
        .then(newplaylist => dispatch(receivePlaylist(newplaylist)));
}

export const updatePlaylist = playlist => dispatch => {
    return PlaylistAPI.updatePlaylist(playlist)
        .then(updatedplaylist => dispatch(receivePlaylist(updatedplaylist)));
}

export const createPlaylistSong = playlistSong => dispatch => {
    return PlaylistAPI.createPlaylist(playlistSong)
}
