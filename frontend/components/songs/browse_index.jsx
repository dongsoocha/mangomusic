import React from 'react';
import BrowseIndexItem from './browse_index_item';

class BrowseIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSongs(this.props.albumId);
    }

    render() {
        const { songs, fetchSong, togglePlayState, currentSong, playState } = this.props;
        // debugger
        return (
            <ul className="browse-songs-grid sub-grid">
                {
                    songs.map(song => (
                        <BrowseIndexItem
                            song={song}
                            fetchSong={fetchSong}
                            key={song.id}
                            togglePlayState={togglePlayState}
                            currentSong={currentSong}
                            playState={playState}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default BrowseIndex;