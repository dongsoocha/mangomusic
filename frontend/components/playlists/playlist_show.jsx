import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PlaylistSongIndexItem from '../songs/playlist_song_index_item';

class PlaylistShow extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        const { playlist } = this.props;
        if (!playlist) return null;
        return (
            <div className="playlist-show-container">
                <img src={window.playlistURL} alt="playlist-image"/>
                <h1>{playlist.name}</h1>
                <ul className="playlist-songs">
                    {
                        playlist.songs.map(song => (
                            <PlaylistSongIndexItem 
                                song={song}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default PlaylistShow;