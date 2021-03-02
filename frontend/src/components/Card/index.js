import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions";

import "./styles.scss";

const Card = ({ title, price, addToCart }) => {
    return (
        <div className="card">
            <div className="image">
                <img height="250" width="250" />
            </div>

            <div className="content">
                <h3 className="title">{title}</h3>
                <span className="price">{price}$</span>
                <button
                    className="add-to-cart-button"
                    onClick={() => addToCart({ id: 1, title, price })}
                >ADD TO CART</button>
            </div>
        </div>
    );
};

export default connect(null, { addToCart })(Card);