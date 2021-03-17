import React from "react";
import { connect } from "react-redux";
import { updatePlaylist } from "../../actions/playlist_actions";
import { Link } from "react-router-dom";

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
    return (e) => this.setState({ name: e.currentTarget.value });
  }

  render() {
    return (
      <div className="playlist-edit">
        <input
          type="text"
          value={this.state.name}
          onChange={this.update("name")}
          // onChange={this.handleChange}
        />
        <div className='edit-playlists'>
          <button
            type="submit"
            value={this.state.name}
            onClick={this.handleSubmit}
          >
            Save
          </button>
          <button>
            <Link
              to="/browse"
              onClick={() => this.props.deletePlaylist(this.state)}
            >
              Delete
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
});

export default connect(null, mapDispatchToProps)(PlaylistEditFormContainer);
