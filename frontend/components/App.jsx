import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./player/nav_bar_container";
import SubscribePromptContainer from "./signup_footer/subscribe_prompt_container";
import AppNavigatorContainer from "./app_navigator/app_navigator_container";
import SplashContainer from "./splash/splash_container";
import BrowseContainer from "./browse/browse_container";
import AlbumShowContainer from "./albums/album_show_container";
import ArtistShowContainer from "./artists/artist_show_container";
import PlaylistShowContainer from './playlists/playlist_show_container.jsx';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const NoMatchPage = () => {
    return (
        <div>
            <h3>404 - Not found</h3>
            <button><Link to="/browse">Browse</Link></button>
        </div>
    );
};

const App = () => {
    // return (
        // )
        return (
        <div className="whole-app">
            <Modal modal="" />
            <NavBarContainer />
            <div className="main-space">
                <AppNavigatorContainer className="navigator" />
                <section className="App">
                    <Switch>
                        <AuthRoute exact path="/" component={SplashContainer} />
                        <Route exact path="/browse" component={BrowseContainer} />
                        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
                        <Route exact path="/artists/:artistId" component={ArtistShowContainer} />
                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </section>
            </div>
            <SubscribePromptContainer />
        </div>
    );
};

export default App;