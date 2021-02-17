import { connect } from 'react-redux';
import BrowseIndex from './browse_index';
import { fetchSongs, fetchCurrentSong } from '../../actions/song_actions';
import { togglePlayState } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        songs: Object.values(state.entities.songs)
    }

};

const mapDispatchToProps = dispatch => ({
    fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
    fetchSong: (songId) => dispatch(fetchCurrentSong(songId)),
    togglePlayState: (songId) => dispatch(togglePlayState(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseIndex);
