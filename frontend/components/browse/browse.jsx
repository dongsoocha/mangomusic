import React from 'react';
import AlbumsIndexContainer from "../albums/album_index_container";
// import ArtistIndexContainer from "../artist/artist_index_container";
const Browse = () => {
    return (
        <div className="browse">
            <h1 className="browse-headers">Featured</h1>
            <h1 className="browse-headers">Albums</h1>
            <AlbumsIndexContainer />
            <h1 className="browse-headers">Popular Artists</h1>
            {/* <ArtistIndexContainer /> */}
            <h1 className="browse-songs">New Songs</h1>
            {/* <SongsIndexContainer /> */}
        </div>
    )
}

export default Browse;