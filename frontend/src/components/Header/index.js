import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import Dropdown from "../Dropdown/";
import Cart from "../Cart";
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
                <Link to="/user" className="item user"><FiUser size={22} /></Link>
            </div>
        </div>
    );
}

export default Header;