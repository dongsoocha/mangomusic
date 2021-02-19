import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchCurrentSong } from '../../actions/song_actions';
import { togglePlayState } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        currentSong: state.session.currentSong,
        playState: state.session.playState
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        togglePlayState: songId => dispatch(togglePlayState(songId)),
        fetchSong: songId => dispatch(fetchCurrentSong(songId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);