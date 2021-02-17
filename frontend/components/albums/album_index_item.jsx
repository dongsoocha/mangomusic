import React from 'react';
import { Link} from 'react-router-dom';

const AlbumIndexItem = props => {
    return (
        <li>
            <Link to={`/albums/${props.album.id}`} className="album-picture-link">
                <img src={window.porterURL} alt="porter url"/>
            </Link>
            <Link to={`/albums/${props.album.id}`} className="album-outter-link"><p className="album-link">{props.album.name}</p>
            <p className="album-artist-link">{props.album.artist.name}</p></Link>
        </li>
    )
};

export default AlbumIndexItem;