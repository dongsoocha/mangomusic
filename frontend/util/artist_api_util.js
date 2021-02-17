export const receiveArtists = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/artists',
    })
};

export const receiveArtist = artistId => {
    return $.ajax({
        method: 'GET',
        url: `api/artists/${artistId}`,
    })
};