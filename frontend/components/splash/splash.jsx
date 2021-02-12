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
            <h1>SHOULD SEE CONTENT HERE</h1>
            <p>Size 2 boxes down, minimum widths fixed, smaller and can't scroll</p>
            <p>This is under construction using CSS Grid</p>
        </div>
    )

    return currentUser ? Browse() : Greeting();
};

export default Splash;
