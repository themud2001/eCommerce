import React from "react";

import "./styles.scss";

const Card = () => {
    return (
        <div className="card">
            <div className="image">
                <img height="250" width="250" />
            </div>

            <div className="content">
                <h3 className="title">T-Shirt</h3>
                <span className="price">9.99$</span>
                <button className="add-to-cart-button">ADD TO CART</button>
            </div>
        </div>
    );
};

export default Card;