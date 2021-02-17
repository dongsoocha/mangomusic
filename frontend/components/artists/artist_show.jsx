import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from "../albums/album_index_item";

class ArtistShow extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        const { artist } = this.props;
        return (
            <div className="artist-show">
                <div className="artist-box">
                    <img src={window.myPicURL} alt="my pic" className="artist-pic"/>
                    <h1 className="artist-show-name">{artist.name}</h1>
                </div>
                <h1 className="artist-header">Essential Albums</h1>
                {this.props.artist.albums.map(album => {
                    return (
                        <AlbumIndexItem
                        album={album}
                        key={`${album.id}${this.props.artist.name}`}
                        />
                        )
                    })
                }
                <p className="artist-show-desc">{artist.description}</p>
            </div>
        )
    }
}

export default ArtistShow;