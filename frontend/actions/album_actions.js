import * as AlbumsAPI from "../util/albums_api_util";

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'

export const receiveAlbums = albums => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

export const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

export const fetchAlbums = () => dispatch => {
    return AlbumsAPI.receiveAlbums()
        .then(albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = albumId => dispatch => {
    return AlbumsAPI.receiveAlbum(albumId)
        .then(album => dispatch(receiveAlbum(album)));
};