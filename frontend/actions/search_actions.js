import * as SearchAPI from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveSearch = results => {
    return {
        type: RECEIVE_SEARCH,
        results
    };
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    };
};

export const fetchSearchResults = search => dispatch => {
    return SearchAPI.getSearchResults(search)
        .then(results => dispatch(receiveSearch(results)));
}