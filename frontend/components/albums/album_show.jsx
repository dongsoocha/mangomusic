import React from 'react';
import { Link } from 'react-router-dom';
import SongsIndexContainer from "../songs/songs_index_container";


class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {
        const { album } = this.props;

        return (
            <div className="album-show">
                <img src={window.porterURL} alt="porter url" />
                <h1>{album.name}</h1>
                {/* <ul className="album-songs-list">
                    {album.songs.map(song => (
                        <li>{song.name}</li>
                    ))}
                </ul> */}
                < SongsIndexContainer className="album-show"albumId={album.id} />
                <Link to="/browse">Go Back Home</Link>
            </div>
        );
    }
}

export default AlbumShow;
