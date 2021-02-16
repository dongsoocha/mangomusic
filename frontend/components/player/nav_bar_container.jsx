import { connect } from 'react-redux';
import Player from './player';

import { logout, demoLogin, togglePlayState } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
    currentUser: session.id,
    currentSong: session.currentSong,
    playState: session.playState
});

const mapDispatchToProps = dispatch => {
    return {
        demoLogin: () => dispatch(demoLogin()),
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        togglePlayState: songId => dispatch(togglePlayState(songId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);