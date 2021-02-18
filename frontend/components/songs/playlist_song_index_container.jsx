import { connect } from 'react-redux';
import PlaylistSongIndex from './playlist_song_index';
import { fetchSongs, fetchCurrentSong } from '../../actions/song_actions';
import { togglePlayState } from '../../actions/session_actions';

const mapStateToProps = state => {
    debugger
    return {
        songs: Object.values(state.entities.songs),
        currentSong: state.session.currentSong,
        playState: state.session.playState
    }

};

const mapDispatchToProps = dispatch => ({
    fetchSongs: (albumId) => dispatch(fetchSongs(albumId)),
    fetchSong: (songId) => dispatch(fetchCurrentSong(songId)),
    togglePlayState: (songId) => dispatch(togglePlayState(songId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongIndex);
