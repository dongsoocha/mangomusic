import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = props => {
    return (
        <li className="playlist-index-item">
            <Link to={`/playlists/${props.playlist.id}`}>{props.playlist.name}</Link>
        </li>
    )
};

export default PlaylistIndexItem;