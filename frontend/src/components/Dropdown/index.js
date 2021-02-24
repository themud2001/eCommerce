import React from "react";
import { FiChevronDown } from "react-icons/fi";

import "./styles.scss";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <span className="text">SHOP</span>

            <div className="content">
                <div className="section">
                    <h5 className="header">MEN</h5>
                    <a href="#" className="category">T-Shirts</a>
                    <a href="#" className="category">Shoes</a>
                    <a href="#" className="category">Pants</a>
                </div>

                <div className="section">
                    <h5 className="header">WOMEN</h5>
                    <a href="#" className="category">T-Shirts</a>
                    <a href="#" className="category">Shoes</a>
                    <a href="#" className="category">Pants</a>
                </div>

                <div className="section">
                    <h5 className="header">KIDS</h5>
                    <a href="#" className="category">T-Shirts</a>
                    <a href="#" className="category">Shoes</a>
                    <a href="#" className="category">Pants</a>
                </div>
            </div>

            <FiChevronDown />
        </div>
    );
};

export default Dropdown;