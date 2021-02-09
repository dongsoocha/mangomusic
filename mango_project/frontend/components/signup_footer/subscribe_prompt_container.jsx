import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import SubscribePrompt from './subscribe_prompt';

const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribePrompt);