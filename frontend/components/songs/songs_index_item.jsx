import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState }) => {
    return (
        <li className="song-container">
            <p>{song.trackNumber}</p>
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button onClick={() => {
                fetchSong(song.id)}}>Play</button>
            <p>{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
