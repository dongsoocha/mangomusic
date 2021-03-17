import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import SearchContainer from '../search/search_container';

const AppNavigator = () => {
    const placeholder = (
        <i className="fas fa-search"></i>
    );

    

    return (
      <nav className="app-nav">
        <p className="mango-logo">
          <img className="small-logo" src={window.mangoURL} alt="Mango Logo" />
          <Link to="/">Music</Link>
        </p>

        <SearchContainer />
        {/* find a way to parse through state */}
        {/* maybe in mstp? */}
        {/* add in a modal to show, if empty, don't display */}
        {/* <button>Listen Now</button> */}
        <button>
          <Link to="/browse" className="link">
            Browse
          </Link>
        </button>
        {/* <button>Radio</button> */}
        <PlaylistIndexContainer />
        <div className="links">
          <a
            href="https://www.linkedin.com/in/dongsoo-cha-72511476/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/dongsoocha/sort-visualizer/"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://angel.co/u/dongsoo-cha" target="_blank">
            <i className="fab fa-angellist"></i>
          </a>
        </div>
      </nav>
    );
};

export default AppNavigator;