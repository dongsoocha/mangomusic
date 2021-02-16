import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = ({ song, fetchSong, togglePlayState }) => {
    return (
        <li className="song-container">
            <p>{song.trackNumber}</p>
            <audio ref={`song${song.id}`}>
                <source src={song.audioUrl} type="audio/mpeg" />
            </audio>
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button onClick={() => {
                togglePlayState(song.id)
                fetchSong(song.id)}}>Play</button>
            <p>{song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
