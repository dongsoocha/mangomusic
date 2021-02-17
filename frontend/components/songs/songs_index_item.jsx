import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState, currentSong }) => {
    return (
        <li className="song-container">
            
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button onClick={() => {
                fetchSong(song.id)
            }}>{!currentSong || song.id !== currentSong.id ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}<p>{song.trackNumber}</p></button>
            <p class="song-name">{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
