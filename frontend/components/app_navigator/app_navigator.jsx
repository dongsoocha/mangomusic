import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import SearchContainer from '../search/search_container';

const AppNavigator = () => {
    const placeholder = (
        <i className="fas fa-search"></i>
    );

    

    return (
        <nav className="app-nav">
            <p className="mango-logo"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" /><Link to='/'>Music</Link></p>
            
            <SearchContainer />
            {/* find a way to parse through state */}
            {/* maybe in mstp? */}
            {/* add in a modal to show, if empty, don't display */}
            {/* <button>Listen Now</button> */}
            <button><Link to="/browse" className="link">Browse</Link></button>
            {/* <button>Radio</button> */}
            <PlaylistIndexContainer />
        </nav>
    );
};

export default AppNavigator;