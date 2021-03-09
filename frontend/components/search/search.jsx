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
      <div className="search-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            placeholder="search"
            onChange={this.handleChange}
            ref={this.inputRef}
            onKeyPress={(e) => this.keypressHandler(e)}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
        {/* <SearchResult results={this.props.results} /> */}
      </div>
    );
  }
}

export default withRouter(Search);