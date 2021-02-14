export const receiveSongs = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `api/albums/${albumId}/songs`,
    })
};