import React from "react";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar/nav_bar_container";

const App = () => {
    return (
        <div>
            <Modal modal="login" />
            <h1>Mango Music</h1>
            <NavBarContainer />
        </div>
    )
};

export default App;