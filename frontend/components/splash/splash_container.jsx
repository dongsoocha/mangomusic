import { connect } from 'react-redux';
import Splash from './splash';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        albums: () => dispatch(fetchAlbums()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);