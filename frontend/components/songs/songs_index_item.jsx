import React from 'react';
import { Link } from 'react-router-dom';

const SongsIndexItem = props => {
    
    console.log(props.song.audioUrl)
    return (
        <li className="song-container">
            <audio controls>
                <source src={props.song.audioUrl} type="audio/mpeg" />
            </audio>
            {/* <p>{props.song.audioURL}</p> */}
            <p>{props.song.name}</p>

        </li>
    )
};

export default SongsIndexItem;
