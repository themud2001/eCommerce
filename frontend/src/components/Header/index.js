import React from "react";

import "./styles.scss";

const Header = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <a><img src="/images/brand.png" /></a>
            </div>

            <div className="left">
                <a className="item">SHOP</a>
                <a className="item">ABOUT</a>
                <a className="item">CONTACT</a>
            </div>

            <div className="right">
                <a className="item">CART</a>
                <a className="item">USER</a>
            </div>
        </div>
    );
}

export default Header;