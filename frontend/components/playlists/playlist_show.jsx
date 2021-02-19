import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import PlaylistSongIndexItem from '../songs/playlist_song_index_item';
import PlaylistEditFormContainer from './playlist_edit_form_container';

class PlaylistShow extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
            this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render() {
        const { playlist, fetchSong, togglePlayState, currentSong, playState } = this.props;
        
        if (!playlist) return null;
        return (
            <div className="playlist-show">
                <img src={window.playlistURL} alt="playlist-image"/>
                <div className="playlist-show-info">
                    <PlaylistEditFormContainer playlist={playlist} />
                    <div className="playlist-show">
                        <ul className="songs-grid">
                            {
                                playlist.songs.map(song => (
                                    <PlaylistSongIndexItem 
                                        song={song}
                                        fetchSong={fetchSong}
                                        key={song.id}
                                        togglePlayState={togglePlayState}
                                        currentSong={currentSong}
                                        playState={playState}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlaylistShow;