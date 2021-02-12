import React from 'react';

const Splash = ({ openModal, currentUser }) => {
    const Greeting = () => (
        <div className="splash">
            <p className="mango-logo-2"><img className="small-logo" src={window.mangoURL} alt="Mango Logo" />Music</p>
            <p className="Greeting">Discover new music every day.</p>
            <p className="splash-text">Get playlists and albums inspired by the artists and genres you're listening to. 3 months free, then $9.99/month</p>
            <button className="register-button" onClick={() => openModal('login')}>Try It Free</button>
            <img className="upsell" src={window.upsellURL} alt="upsell image" />        
        </div>
    )

    const Browse = () => (
        <div className="splash-2">
            <div className="page-sections">
                <h1 className="headers">Browse</h1>
                <p className="grid-text-header">You Gotta Hear</p>
                <div className="gotta-hear subgrids">
                </div>
                <p className="grid-text-header">New Albums</p>
                <div className="new-albums subgrids">
                </div>
                <p className="grid-text-header">New Music</p>
                <div className="new-music subgrids">
                </div>
                <p className="grid-text-header">Best New Songs</p>
                <div className="best-songs subgrids">
                </div>
            </div>
        </div>
    )

    return currentUser ? Browse() : Greeting();
};

export default Splash;
