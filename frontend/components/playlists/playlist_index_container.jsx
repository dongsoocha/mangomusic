import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => {
    if (state.entities.playlists) {
        return {
            playlists: Object.values(state.entities.playlists),
            currentUser: state.session.id,
        }
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);