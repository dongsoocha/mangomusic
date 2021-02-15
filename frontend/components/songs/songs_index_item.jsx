import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const SongsIndexItem = props => {

// debugger
    return (
        <li className="song-container">
            <audio controls id={`song`}>
                <source src={props.song.audioUrl} type="audio/mpeg" />
            </audio>
            <button></button>
            <p>{props.song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
