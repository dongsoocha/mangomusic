import React from 'react';
import {deletePlaylistSong} from '../../actions/playlist_actions';

const PlaylistDeleteContainer = ({ playlist, song }) => {
    const playlistSong = {
        playlist_id: playlist.id,
        song_id: song.id
    }
    return (
        <div>
            <button onClick={() => dispatch(deletePlaylistSong(playlistSong))}>-</button>
        </div>
    )

}

export default PlaylistDeleteContainer;