import React from 'react';
import SongsIndexItem from './songs_index_item';

class SongsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    render() {
        const { songs, fetchSong, togglePlayState, currentSong } = this.props;
        // debugger
        return (
            <ul className="songs-grid sub-grid">
                {
                    songs.map(song => (
                        <SongsIndexItem
                            song={song}
                            fetchSong={fetchSong}
                            key={song.id}
                            togglePlayState={togglePlayState}
                            currentSong={currentSong}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default SongsIndex;