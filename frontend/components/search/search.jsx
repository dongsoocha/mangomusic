import React from 'react';
import { withRouter } from 'react-router';
import SearchResult from './search_result';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const search = e.target.value;
        this.setState({search: search});
        debugger
        if (this.state.search) {
            this.props.fetchSearchResults(this.state.search);
        } else {
            this.props.clearSearch();
        }

    }

    handleSubmit() {
        this.props.history.push('/search');
    }    

    render() {
        return (
            <div className="search-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} placeholder="search" onChange={this.handleChange}/>
                    <input type="submit" style={{display: 'none'}}/>
                </form>
                    {/* <SearchResult results={this.props.results} /> */}
            </div>
        )
    }
}

export default withRouter(Search);