export const receiveSongs = (albumId) => {
    return $.ajax({
        method: 'GET',
        url: `api/albums/${albumId}/songs`,
    })
};

export const receiveSong = (songId) => {
    return $.ajax({
        method: 'GET',
        url: `api/songs/${songId}`,
    })
};