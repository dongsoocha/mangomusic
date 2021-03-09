import { connect } from "react-redux";


import SearchShow from './search_show';

const mapStateToProps = (state) => {
  return {
    results: state.entities.search,
  };
};


export default connect(mapStateToProps, null)(SearchShow);
