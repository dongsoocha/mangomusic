import React from "react";
import PlaylistIndexItem from "./playlist_index_item";
import { withRouter } from "react-router";

class PlaylistIndex extends React.Component {
  // constructor(props) {
  //     super(props);
  //     // this.createPlaylist = this.createPlaylist.bind(this);

  // }

  componentDidMount() {
    // debugger
    this.props.fetchPlaylists();
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.playlists ||
      !this.props.playlists ||
      this.props.playlists.length !== prevProps.playlists.length
    ) {
      this.props.fetchPlaylists();
    }
  }

  createPlaylist(playlist) {
    this.props.createPlaylist(playlist);
    // this.props.fetchPlaylists();
    // this.props.history.push(`/playlists/${playlist.id}`)
  }

  render() {
    const { playlists, currentUser } = this.props;
    const defPlaylist = {
      name: "Playlist",
      user_id: currentUser,
    };
    if (!currentUser) return null;
    return (
      <div className="playlist-index">
        <div className="playlist-header">
          <h3>PLAYLISTS</h3>
          <button onClick={() => this.createPlaylist(defPlaylist)}>+</button>
        </div>
        <ul>
          {playlists.map((playlist) => (
            <PlaylistIndexItem
              playlist={playlist}
              key={`${playlist.id}${playlist.name}`}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(PlaylistIndex);
