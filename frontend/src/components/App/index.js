import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../../history";
// import { GoogleAuth } from "../../contexts/GoogleAuthContext";
import About from "../About";
import Contact from "../Contact";
import GoogleAuth from "../GoogleAuth";
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
                <Router history={history}>
                    <GoogleAuth />
                    <Header />
                    <Route path="/" exact component={Landing} />
                    <Route path="/" exact component={Featured} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/login" exact component={Login} />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;