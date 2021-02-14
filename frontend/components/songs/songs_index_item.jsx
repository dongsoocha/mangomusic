import React from 'react';
import { Link } from 'react-router-dom';

const SongsIndexItem = props => {
    return (
        <li>
            {props.song.name}
        </li>
    )
};

export default SongsIndexItem;