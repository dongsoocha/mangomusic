import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = props => {
    
    return (
        <li>
            <div className="left-artist">
                <Link to={`/artists/${props.artist.id}`} className="artist-picture-link">
                    <img src={window.myPicURL} alt="my pic"/>
                </Link>
                <Link to={`/artists/${props.artist.id}`} className="artist-outter-link">
                    <p className="artist-link">{props.artist.name}</p>
                </Link>
            </div>
            <p className="artist-desc">Violinist turned software engineer, Dongsoo Cha's previous performances serve as a reminder of his attention to detail and his love of the abstract. Listen to this up-and-coming programmer's musical mind now!</p>
        </li>
    )
}

export default ArtistIndexItem;