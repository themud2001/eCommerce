import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="ui pointing menu">
                <a className="item"><img src="/images/brand.png" /></a>
                <a className="ui pointing dropdown link item">SHOP<i className="dropdown icon" /></a>

                <div className="right menu">
                    <a className="item"><i className="cart icon" /></a>
                    <a className="item"><i className="user icon" /></a>
                </div>
            </div>
        );
    }
}

export default Header;