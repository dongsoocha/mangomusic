import { connect } from 'react-redux';

import { logout, demoLogin } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session}) => ({
    currentUser: session.id,
});

const mapDispatchToProps = dispatch => {
    return {
        demoLogin: () => dispatch(demoLogin()),
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);