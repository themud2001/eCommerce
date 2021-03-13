import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/";
import Cart from "../Cart";
import User from "../User";
import "./styles.scss";

const Header = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <Link to="/"><img src="/images/brand.png" /></Link>
            </div>

            <div className="left">
                <Dropdown />
                <Link to="/about" className="item">ABOUT</Link>
                <Link to="/contact" className="item">CONTACT</Link>
            </div>

            <div className="right">
                <Cart />
                <User />
            </div>
        </div>
    );
}

export default Header;