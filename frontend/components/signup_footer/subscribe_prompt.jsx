import React from 'react';
import { openModal } from '../../actions/modal_actions';

const SubscribePrompt = ({ currentUser, openModal }) => {
    const sessionLinks = () => (
        <nav className="signup-login">
            <button onClick={() => openModal('signup')}>Sign Up</button>
        </nav>
    );
    return currentUser ? null : sessionLinks();
};

export default SubscribePrompt;