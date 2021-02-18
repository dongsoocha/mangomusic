import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState, playState, currentSong}) => {
    return (
        <li className="song-container" onClick={() => {
            fetchSong(song.id)
        }}>
            
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button>{currentSong && song.id === currentSong.id && playState ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}<p>{song.trackNumber}</p></button>
            <p className="song-name">{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
