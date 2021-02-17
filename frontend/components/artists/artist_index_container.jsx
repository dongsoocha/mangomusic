import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = state => {
    return {
        artists: Object.values(state.entities.artists)
    }

};

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
