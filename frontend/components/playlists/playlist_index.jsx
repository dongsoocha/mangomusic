import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { withRouter } from "react-router";

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.createPlaylist = this.createPlaylist.bind(this);

    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.playlists.length !== prevProps.playlists.length) {
    //         this.props.fetchPlaylists();
    //     }
    // }

    createPlaylist(playlist) {
        this.props.createPlaylist(playlist);
        // this.props.fetchPlaylists();
        // this.props.history.push(`/playlists/${playlist.id}`)
    }

    render() {
        const { playlists, currentUser } = this.props;
        const defPlaylist = {
            name: 'Playlist',
            user_id: currentUser
        }
        if (!playlists) return (
            <div>
                <h3>Playlists</h3>
                <button onClick={() => this.createPlaylist(defPlaylist)}>Create</button>
            </div>
        )
        return (
            <div>
                <h3>Playlists</h3>
                <button onClick={() => this.createPlaylist(defPlaylist)}>Create</button>
                <ul className="playlist-index">
                    {
                        playlists.map(playlist => (
                            <PlaylistIndexItem
                                playlist={playlist}
                                key={`${playlist.id}${playlist.name}`}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(PlaylistIndex);