import React from 'react';
import { withRouter } from 'react-router';
import SearchResult from './search_result';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const search = e.target.value;
    this.setState({ search: search });
  }

  handleSubmit() {
    if (this.state.search) {
      this.props.fetchSearchResults(this.state.search);
    } else {
      this.props.clearSearch();
    }
    this.props.history.push("/search");
  }

  keypressHandler(e) {
    if (e.key === "Enter") {
      this.setState({ search: this.inputRef.current.value });
      this.inputRef.current.blur();
      this.inputRef.current.value = "";
    }
  }

  render() {
    return (
        <form className="search-box" onSubmit={this.handleSubmit}>
          <i className="fas fa-search"></i>
          <input
            className="nav-search"
            type="text"
            value={this.state.search}
            placeholder="Search"
            onChange={this.handleChange}
            ref={this.inputRef}
            onKeyPress={(e) => this.keypressHandler(e)}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
      
    );
  }
}

export default withRouter(Search);