import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = props => {
    return (
        <li className="playlist-index-item">
            <i className="fas fa-list"></i>
            <Link to={`/playlists/${props.playlist.id}`}>{props.playlist.name}</Link>
        </li>
    )
};

export default PlaylistIndexItem;