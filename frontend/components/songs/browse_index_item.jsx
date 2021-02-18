import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AddToPlaylistFormContainer from '../playlists/add_to_playlist_form_container';

const BrowseIndexItem = ({ song, fetchSong, currentSong, playState }) => {
    return (
        <div>
            <li className="browse-song-container">
                {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
                <button onClick={() => {
                    fetchSong(song.id)
                }}>
                    { currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                    <img src={window.testalbumURL} alt="song-album-cover" />
                </button>
                <div className="browse-song-text">
                    <p className="song-name-browse">{song.name}</p>
                    <p className="artist-name-browse">{song.artist.name}</p>
                </div>
            </li>
            
        </div>
    )
};

export default BrowseIndexItem;
