import React from 'react';

const AppNavigator = () => {
    const placeholder = (
        <i className="fas fa-search"></i>
    );
    return (
        <nav className="app-nav">
            <p className="mango-logo"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" />Music</p>
            <input className="nav-search" type="text" placeholder="Search"/>
            <button>Listen Now</button>
            <button>Browse</button>
            <button>Radio</button>
        </nav>
    );
};

export default AppNavigator;