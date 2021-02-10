import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SubscribePromptContainer from "./signup_footer/subscribe_prompt_container";

const App = () => {
    return (
        <div>
            <Modal modal="" />
            <NavBarContainer />
            <h1>Mango Music</h1>
            <SubscribePromptContainer />
        </div>
    )
};

export default App;