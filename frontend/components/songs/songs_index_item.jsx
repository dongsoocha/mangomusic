import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState }) => {
    return (
        <li className="song-container">
            
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button onClick={() => {
                fetchSong(song.id)
            }}><p>{song.trackNumber}</p><i className="fas fa-play"></i></button>
            <p class="song-name">{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
