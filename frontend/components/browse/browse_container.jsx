import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';

import Browse from './browse';

const mapStateToProps = ({ entities }) => {
    return {
        albums: entities.albums
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);