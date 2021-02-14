import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./player/nav_bar_container";
import SubscribePromptContainer from "./signup_footer/subscribe_prompt_container";
import AppNavigatorContainer from "./app_navigator/app_navigator_container";
import SplashContainer from "./splash/splash_container";
import BrowseContainer from "./browse/browse_container";
import AlbumShowContainer from "./albums/album_show_container";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};

const App = () => {
    // return (
        // )
        return (
        <div>
            <Modal modal="" />
            <NavBarContainer />
            <AppNavigatorContainer className="navigator" />
            <section className="App">
                <Switch>
                    <Route exact path="/" component={SplashContainer} />
                    <Route exact path="/browse" component={BrowseContainer} />
                    <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
                    <Route component={NoMatchPage} />
                </Switch>
            </section>
            <SubscribePromptContainer />
        </div>
    );
};

export default App;