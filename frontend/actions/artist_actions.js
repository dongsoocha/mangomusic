import * as ArtistsAPI from "../util/artist_api_util";

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'

export const receiveArtists = artists => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const receiveArtist = artist => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const fetchArtists = () => dispatch => {
    return ArtistsAPI.receiveArtists()
        .then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = artistId => dispatch => {
    return ArtistsAPI.receiveArtist(artistId)
        .then(artist => dispatch(receiveArtist(artist)));
};