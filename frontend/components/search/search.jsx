import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            results: {},
            loading: false,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const search = e.target.value;
        this.setState({search, loading: true});
    }


    render() {
        return (
            <div className="search-container">
                <input type="text" value="" placeholder="search" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Search;