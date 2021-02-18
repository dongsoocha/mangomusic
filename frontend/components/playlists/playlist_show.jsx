import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PlaylistSongIndexContainer from '../songs/playlist_song_index_container';

class PlaylistShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        const { playlist } = this.props;
        if (!playlist) return null;

        return (
            <div className="playlist-show-container">
                <h1>{playlist.name}</h1>
                <PlaylistSongIndexContainer />
            </div>
        );
    }
}
export default PlaylistShow;