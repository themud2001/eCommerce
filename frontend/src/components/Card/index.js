import React from "react";

import "./styles.scss";

const Card = ({ title, price }) => {
    return (
        <div className="card">
            <div className="image">
                <img height="250" width="250" />
            </div>

            <div className="content">
                <h3 className="title">{title}</h3>
                <span className="price">{price}$</span>
                <button className="add-to-cart-button">ADD TO CART</button>
            </div>
        </div>
    );
};

export default Card;