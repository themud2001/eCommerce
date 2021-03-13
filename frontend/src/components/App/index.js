import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "../About";
import Contact from "../Contact";
import Header from "../Header";
import Landing from "../Landing";
import Featured from "../Featured";
import Login from "../Login";
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
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/login" exact component={Login} />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;