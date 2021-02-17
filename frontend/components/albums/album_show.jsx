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
                <div className="album-show-info">
                    <h1 className="album-show-name">{album.name}</h1>
                    <h1 className="album-show-artist">{album.artist.name}</h1>
                    <h1 className="album-year">Year: {album.releaseDate.slice(-4)}</h1>
                    < SongsIndexContainer className="album-show"albumId={album.id} />
                </div>
            </div>
        );
    }
}

export default AlbumShow;
