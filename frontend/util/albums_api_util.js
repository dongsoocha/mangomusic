export const receiveAlbums = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/albums',
    })
};

export const receiveAlbum = albumId => {
    return $.ajax({
        method: 'GET',
        url: `api/albums/${albumId}`,
    })
};