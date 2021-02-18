import React from 'react';
import { Link } from 'react-router-dom';

const AppNavigator = () => {
    const placeholder = (
        <i className="fas fa-search"></i>
    );
    return (
        <nav className="app-nav">
            <p className="mango-logo"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" />Music</p>
            <input className="nav-search" type="text" placeholder="Search"/>
            {/* <button>Listen Now</button> */}
            <button><Link to="/browse" className="link">Browse</Link></button>
            {/* <button>Radio</button> */}
            <p>Playlists</p>
        </nav>
    );
};

export default AppNavigator;