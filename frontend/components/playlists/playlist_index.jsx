import React from 'react';
import { createPlaylist } from '../../util/playlist_api_util';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    componentWillUpdate(prevProps) {
        if (this.props.playlists !== prevProps.playlists) {
            console.log('add playlist');
        }
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
                <button onClick={() => createPlaylist(defPlaylist)}>Create</button>
            </div>
        )
        return (
            <div>
                <h3>Playlists</h3>
                <button onClick={() => createPlaylist(defPlaylist)}>Create</button>
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

export default PlaylistIndex;