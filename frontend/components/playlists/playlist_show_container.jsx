import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);