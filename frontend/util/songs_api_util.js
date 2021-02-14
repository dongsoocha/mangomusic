export const receiveSongs = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `api//${albumId}/songs`,
    })
};