import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';

const AppNavigator = () => {
    const placeholder = (
        <i className="fas fa-search"></i>
    );
    return (
        <nav className="app-nav">
            <p className="mango-logo"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" /><Link to='/'>Music</Link></p>
            <input className="nav-search" type="text" placeholder="Search"/>
            {/* find a way to parse through state */}
            {/* maybe in mstp? */}
            {/* <button>Listen Now</button> */}
            <button><Link to="/browse" className="link">Browse</Link></button>
            {/* <button>Radio</button> */}
            <PlaylistIndexContainer />
        </nav>
    );
};

export default AppNavigator;