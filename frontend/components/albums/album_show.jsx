import React from 'react';
import { Link } from 'react-router-dom';


class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {
        debugger
        const { album } = this.props;

        return (
            <div className="album-show">
                <h1>{album.name}</h1>
                <ul className="album-songs-list">
                    {album.songs.map(song => (
                        <li>{song.name}</li>
                    ))}
                </ul>
                <Link to="/browse">Go Back Home</Link>
            </div>
        );
    }
}

export default AlbumShow;
