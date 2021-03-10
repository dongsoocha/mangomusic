import React from "react";
import AlbumsIndexContainer from "../albums/album_index_container";
// import ArtistIndexContainer from "../artist/artist_index_container";
import { Link } from "react-router-dom";
import BrowseIndexContainer from "../songs/browse_index_container";
import ArtistIndexContainer from "../artists/artist_index_container";

class SearchShow extends React.Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const { results } = this.props;
    if (results.empty) return null;
    return (
      <div className="browse">
        <h1 className="browse-header">Search Results</h1>
        <h3 className="browse-headers">Artists</h3>
        <ul className="search">
          {results.artists && results.artists.length
            ? results.artists.map((artist) => (
                <li>
                  <Link
                    to={`/artists/${artist.id}`}
                    className="artist-outter-link"
                  >
                    <p className="artist-link">{artist.name}</p>
                  </Link>
                </li>
              ))
            : <li>No results found</li>
          }
        </ul>

        <h3 className="browse-headers">Albums</h3>
        <ul className="search">
          {results.albums && results.albums.length ? (
            results.albums.map((album) => (
              <li>
                <Link to={`/albums/${album.id}`} className="album-outter-link">
                  <p className="album-link">{album.album_name}</p>
                  {album.artist ? (
                    <p className="album-artist-link">
                      {album.artist.name} - {album.release_date.slice(-4)}
                    </p>
                  ) : null}
                </Link>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
        <h3 className="browse-headers">Songs</h3>
        <ul className="search">
          {results.songs && results.songs.length
            ? results.songs.map((song) => (
                <li>
                  <Link
                    to={`/albums/${song.album_id}`}
                    className="album-outter-link"
                  >
                    <p className="album-link">{song.name}</p>
                  </Link>
                </li>
              ))
            : <li>No results found</li>
          }
        </ul>
      </div>
    );
  }
}

export default SearchShow;
