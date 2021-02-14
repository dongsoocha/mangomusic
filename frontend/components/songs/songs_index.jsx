import React from 'react';
import SongsIndexItem from './songs_index_item';

class SongsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    render() {
        const { songs } = this.props;
        return (
            <div>
                <ul className="songs-grid sub-grid">
                    {
                        songs.map(song => (
                            <SongsIndexItem
                                song={song}
                                key={song.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SongsIndex;