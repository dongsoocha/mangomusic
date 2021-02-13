import { connect } from 'react-redux';
import React from 'react';
import { } from '../../actions/album_actions';

import Browse from './browse';

const mapStateToProps = ({ albums }) => {
    return {
        albums: albums
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);