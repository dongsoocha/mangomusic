import { connect } from 'react-redux';
import SongsIndex from './songs_index';
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
    togglePlayState: () => dispatch(togglePlayState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);
