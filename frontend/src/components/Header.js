import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return ReactDOM.createPortal(
        <div className="ui fixed top pointing menu">
            <a className="item"><img src="/images/brand.png" /></a>
            <a className="item">SHOP<i className="dropdown icon" /></a>
            <a className="item">ABOUT</a>
            <a className="item">CONTACT</a>

            <div className="right menu">
                <a className="item"><i className="cart icon" /></a>
                <a className="item"><i className="user icon" /></a>
            </div>
        </div>,
        document.querySelector("body")
    );
}

export default Header;