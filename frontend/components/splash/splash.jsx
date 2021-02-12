import React from 'react';

const Splash = () => {
    return (
        <div className="splash">
            <p className="mango-logo-2"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" />Music</p>
            <div className="splash-text">
                <p>Discover new music every day.</p>
                <p>Get playlists and albums inspired by the artists and genres you're listening to. 3 months free, then $9.99/month</p>
            </div>
            <button>Try it free</button>
        </div>
    );
};

export default Splash;
