import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;
        
        return (
            <div>
                <ul className="album-grid sub-grid">
                    {
                        albums.map(album => (
                            <AlbumIndexItem
                                album={album}
                                key={`${album.id}${album.name}`}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default AlbumIndex;