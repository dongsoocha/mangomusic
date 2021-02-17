import React from 'react';
import AlbumsIndexContainer from "../albums/album_index_container";
// import ArtistIndexContainer from "../artist/artist_index_container";
import BrowseIndexContainer from "../songs/browse_index_container";
import ArtistIndexContainer from "../artists/artist_index_container";
const Browse = () => {
    return (
        <div className="browse">
            <h1 className="browse-header">Browse</h1>
            <h3 className="browse-headers">Artist Spotlight</h3>
            <ArtistIndexContainer />
            <h3 className="browse-headers">Featured Albums</h3>
            <div className='album-scroll'></div>
            <AlbumsIndexContainer />
            {/* <h3 className="browse-headers">Popular Artists</h3> */}
            {/* <ArtistIndexContainer /> */}
            <h3 className="browse-headers">New Songs</h3>
            <div className="song-scroll">
                {/* <button className="song-left"><i class="fas fa-chevron-left"></i></button> */}
                <BrowseIndexContainer className = "song-browse" albumId="browse"/>
                {/* <button className="song-right"><i class="fas fa-chevron-right"></i></button> */}
            </div>
        </div>
    )
}

export default Browse;