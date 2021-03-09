import { connect } from "react-redux";

import Search from './search';

import { fetchSearchResults, clearSearch } from '../../actions/search_actions';

const mapStateToProps = ({search}) => {
    return {
        results: search,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchResults: search => dispatch(fetchSearchResults(search)),
        clearSearch: () => dispatch(clearSearch()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);