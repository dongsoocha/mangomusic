import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SubscribePromptContainer from "./signup_footer/subscribe_prompt_container";
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
            <NavBarContainer />
            <h1>Mango Music</h1>
            <SubscribePromptContainer />
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