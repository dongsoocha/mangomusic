import React from 'react';
import { connect } from 'react-redux';
import { updatePlaylist } from '../../actions/playlist_actions';

class PlaylistEditFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePlaylist(this.state);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.playlist);
        // this.setState(nextProps.playlist);
    }


    update(name) {
        return e => this.setState({ name: e.currentTarget.value});
    }

    render() {
        return (
            <div className='playlist-edit'>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    // onChange={this.handleChange}
                />
                <button type='submit' value={this.state.name} onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updatePlaylist: playlist => dispatch(updatePlaylist(playlist))
});

export default connect(null, mapDispatchToProps)(PlaylistEditFormContainer);