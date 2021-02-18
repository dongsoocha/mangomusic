import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddToPlaylistForm from './add_to_playlist_form';
import { createPlaylistSong } from '../../util/playlist_api_util';

const mapStateToProps = state => {
    return {
        playlists: Object.values(state.entities.playlists)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createPlaylistSong: playlistSong => createPlaylistSong(playlistSong),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylistForm);