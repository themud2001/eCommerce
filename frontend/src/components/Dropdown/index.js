import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import "./styles.scss";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <span className="text">SHOP</span>

            <div className="content">
                <div className="section">
                    <h5 className="header">MEN</h5>
                    <Link to="/men/underwears" className="category">Underwears</Link>
                    <Link to="/men/shoes" className="category">Shoes</Link>
                    <Link to="/men/tshirts" className="category">T-Shirts</Link>
                    <Link to="/men/pants" className="category">Pants</Link>
                </div>

                <div className="section">
                    <h5 className="header">WOMEN</h5>
                    <Link to="/women/dresses" className="category">Dresses</Link>
                    <Link to="/women/skirts" className="category">Skirts</Link>
                    <Link to="/women/pants" className="category">Pants</Link>
                    <Link to="/women/shoes" className="category">Shoes</Link>
                </div>

                <div className="section">
                    <h5 className="header">KIDS</h5>
                    <Link to="/kids/tshirts" className="category">T-Shirts</Link>
                    <Link to="/kids/shoes" className="category">Shoes</Link>
                </div>
            </div>

            <FiChevronDown />
        </div>
    );
};

export default Dropdown;