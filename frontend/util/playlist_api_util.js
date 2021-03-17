export const fetchPlaylists = () => {
    return $.ajax({
            url: 'api/playlists',
            method: 'GET'
    })
};

export const fetchPlaylist = playlistId => {
    return $.ajax({
        url: `/api/playlists/${playlistId}`
    })
};

export const createPlaylist = playlist => {
    return $.ajax({
        method: 'POST',
        url: 'api/playlists',
        data: { playlist }
    })
};

export const updatePlaylist = playlist => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${playlist.id}`,
        data: { playlist }
    })
};

export const deletePlaylist = playlist => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlist.id}`,
    })
}

export const createPlaylistSong = playlist_song => {
    return $.ajax({
        method: 'POST',
        url: 'api/playlist_songs',
        data: { playlist_song }
    })
}

export const deletePlaylistSong = playlist_song => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/playlist_songs/123',
        data: { playlist_song }
    })
}