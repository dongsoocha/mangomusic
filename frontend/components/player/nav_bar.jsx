import React from 'react';
import Player from './player';

const NavBar = ({ currentUser, logout, openModal, demoLogin, currentSong, playState, togglePlayState }) => {
    
    const sessionLinks = () => {
        return (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}><i className="fas fa-user"></i> Sign in</button>
            <button onClick={() => demoLogin()}>Demo Login</button>
        </nav>
        )
    };

    return (
        currentUser ? 
        <Player logout={logout} currentSong={currentSong} playState={playState} togglePlayState={togglePlayState}/> :
        sessionLinks()
        );
    };
    
export default NavBar;