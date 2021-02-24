import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import Dropdown from "../Dropdown/";
import "./styles.scss";

const Header = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <a href="#"><img src="/images/brand.png" /></a>
            </div>

            <div className="left">
                <Dropdown />
                <a href="#" className="item">ABOUT</a>
                <a href="#" className="item">CONTACT</a>
            </div>

            <div className="right">
                <a href="#" className="item cart"><FiShoppingCart size={22} /></a>
                <a href="#" className="item user"><FiUser size={22} /></a>
            </div>
        </div>
    );
}

export default Header;