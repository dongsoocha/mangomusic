import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const BrowseIndexItem = ({ song, fetchSong }) => {
    return (
        <li className="browse-song-container">
            {/* <button onClick={() => fetchSong(song.id).then(() => togglePlayState(song.id))}>Play</button> */}
            <button onClick={() => {
                fetchSong(song.id)
            }}>
                <img src={window.testalbumURL} alt="song-album-cover" />
            </button>
            <div className="browse-song-text">
                <p className="song-name-browse">{song.name}</p>
                <p className="artist-name-browse">{song.artist.name}</p>
            </div>
        </li>
    )
};

export default BrowseIndexItem;
