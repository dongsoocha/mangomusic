import React from 'react';
import { Link} from 'react-router-dom';

const AlbumIndexItem = props => {
    return (
        <li>
            <Link to={`/albums/${props.album.id}`}>{props.album.name}</Link>
        </li>
    )
};

export default AlbumIndexItem;