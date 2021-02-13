import { connect } from 'react-redux';
import Splash from './splash';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = ({ session, entities }) => ({
    currentUser: session.id,
    albums: entities.albums
});

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        albums: () => dispatch(fetchAlbums()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);