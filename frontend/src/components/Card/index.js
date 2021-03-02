import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions";

import "./styles.scss";

class Card extends React.Component {
    render() {
        const { id, title, price } = this.props;
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
                        onClick={() => this.props.addToCart({ id, title, price })}
                    >ADD TO CART</button>
                </div>
            </div>
        );
    }
};

export default connect(null, { addToCart })(Card);