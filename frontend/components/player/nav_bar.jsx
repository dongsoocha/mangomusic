import React from 'react';

const NavBar = ({ currentUser, logout, openModal, demoLogin }) => {
    
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}><i className="fas fa-user"></i> Sign in</button>
            <button onClick={() => demoLogin()}>Demo Login</button>
        </nav>
    );

    const player = () => (
        <div className="player-toolbar">
            <div className="player">
                <button className="shuffle-button"><i className="fas fa-random"></i></button>
                <button className="rewind-button"><i className="fas fa-backward"></i></button>
                <button className="play-button"><i className="fas fa-play"></i></button>
                <button className="next-button"><i className="fas fa-forward"></i></button>
                <button className="repeat-button"><i className="fas fa-redo"></i></button>
            </div>
            <div className="current-info">
                <img className="default-album-cover" src={window.defaultalbumURL} alt="Mango Logo" />
                <div className="info">
                    <img className="default-info-logo" src={window.mangoURL} alt="default logo"/>
                </div>
            </div>
            <div className="volume-slider">
                <p className="volume-icon"><i className="fas fa-volume-up"></i></p>
                <input type="range" min="1" max="100" defaultValue="50" step="1" className="slider" id="myRange"></input>
            </div>
            <button className="logout-button" onClick={() => logout()}>Log Out</button>
        </div>
    )

    return (
        currentUser ? 
        player() :
        sessionLinks()
        );
    };
    
export default NavBar;