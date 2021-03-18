import React from 'react';
import Player from './player';

const NavBar = ({ currentUser, logout, openModal, demoLogin, currentSong, playState, togglePlayState }) => {
    
    const sessionLinks = () => {
        return (
          <nav className="login-signup">
            <a
              href="https://www.linkedin.com/in/dongsoo-cha-72511476/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/dongsoocha/mangomusic" 
              target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://angel.co/u/dongsoo-cha" target="_blank">
              <i className="fab fa-angellist"></i>
            </a>
            <button onClick={() => openModal("login")}>
              <i className="fas fa-user"></i> Sign in
            </button>
            <button onClick={() => demoLogin()}>Demo Login</button>
          </nav>
        );
    };

    return (
        currentUser ? 
        <Player logout={logout} currentSong={currentSong} playState={playState} togglePlayState={togglePlayState}/> :
        sessionLinks()
        );
    };
    
export default NavBar;