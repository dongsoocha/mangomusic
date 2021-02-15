import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState }) => {
    return (
        <li className="song-container">
            <audio id={`song`}>
                <source src={song.audioUrl} type="audio/mpeg" />
            </audio>
            <button onClick={() => fetchSong(song.id)} onClick={() => togglePlayState()}>Play</button>
            <p>{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
