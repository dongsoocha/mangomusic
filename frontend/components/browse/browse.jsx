import React from 'react';
import AlbumsIndexContainer from "../albums/album_index_container";
// import ArtistIndexContainer from "../artist/artist_index_container";
const Browse = () => {
    return (
        <div className="browse">
            <h1 className="browse-header">Browse</h1>
            <h3 className="browse-headers">Featured</h3>
            <h3 className="browse-headers">Albums</h3>
            <AlbumsIndexContainer />
            <h3 className="browse-headers">Popular Artists</h3>
            {/* <ArtistIndexContainer /> */}
            <h3 className="browse-headers">New Songs</h3>
            {/* <SongsIndexContainer /> */}
        </div>
    )
}

export default Browse;