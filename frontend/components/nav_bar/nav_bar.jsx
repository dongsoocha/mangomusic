import React from 'react';
import { openModal } from '../../actions/modal_actions';

const NavBar = ({ currentUser, logout, openModal, demoLogin }) => {
    
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => demoLogin()}>Demo Login</button>
        </nav>
    );

    const player = () => (
        <div>
            <h2>player</h2>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    )

    return (
        currentUser ? 
        player() :
        sessionLinks()
    );
};

export default NavBar;