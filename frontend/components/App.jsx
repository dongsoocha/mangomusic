import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SubscribePromptContainer from "./signup_footer/subscribe_prompt_container";
import AppNavigatorContainer from "./app_navigator/app_navigator_container";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};

const IndexPage = () => {
    return (
        <div>
            <Modal modal="" />
            <NavBarContainer className="nav-bar"/>
            <AppNavigatorContainer className="navigator"/>
            <h1>Mango Music</h1>
            <SubscribePromptContainer className="subscribe-prompt"/>
        </div>
    );
};

const App = () => {
    // return (
    //     <div>
    //         <Modal modal="" />
    //         <NavBarContainer />
    //         <h1>Mango Music</h1>
    //         <SubscribePromptContainer />
    //     </div>
    // )
    return (
        <section className="App">
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route component={NoMatchPage} />
            </Switch>
        </section>
    );
};

export default App;