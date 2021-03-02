import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Header";
import Landing from "../Landing";
import Featured from "../Featured";
import Footer from "../Footer";
import "./styles.scss";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Landing} />
                    <Route path="/" exact component={Featured} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;