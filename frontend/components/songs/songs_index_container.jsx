import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
    debugger
    return {
        songs: Object.values(state.entities.songs)
    }

};

const mapDispatchToProps = dispatch => ({
    fetchSongs: (albumId) => dispatch(fetchSongs(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);
