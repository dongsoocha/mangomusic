import React from "react";
import AlbumsIndexContainer from "../albums/album_index_container";
// import ArtistIndexContainer from "../artist/artist_index_container";
import BrowseIndexContainer from "../songs/browse_index_container";
import ArtistIndexContainer from "../artists/artist_index_container";

const SearchShow = ({results}) => {
  if (!results) return null;
  
  return (
    <div className="browse">
      <h1 className="browse-header">Search Results</h1>
      <h3 className="browse-headers">Artists</h3>
      <ul>
        {results.artists ? results.artists.map((artist) => {
          <li>{artist.name}</li>;
        }) : ''}
      </ul>

      <h3 className="browse-headers">Albums</h3>
      <ul>
        {results.albums ? results.albums.map((album) => {
          <li>{album.album_name}</li>;
        }) : ''}
      </ul>
      <h3 className="browse-headers">Songs</h3>
      <ul>
        {results.songs ? results.songs.map((song) => {
          <li>{song.name}</li>;
        }) : ''}
      </ul>

    </div>
  );
};

// class SearchShow extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {

//     return {

//     }
//   }
// }

export default SearchShow;
