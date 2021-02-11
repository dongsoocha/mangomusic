import React from 'react';
import { openModal } from '../../actions/modal_actions';

const SubscribePrompt = ({ currentUser, openModal }) => {
    const sessionLinks = () => (
        <nav className="signup-login">
            <button className="subscribe" onClick={() => openModal('signup')}>
                <div className="prompts">
                    <p className="main-prompt">Get 60 million songs free for 3 months</p>
                    <p className="sub-prompt">Plus your entire music library on all your devices. 3 months free, then $9.99/month.</p>
                </div>
                <p className="pseudo-button">Try It Free</p></button>
        </nav>
    );
    return currentUser ? null : sessionLinks();
};

export default SubscribePrompt;