import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";

import "./styles.scss";

class Card extends React.Component {
    renderButton(id, title, price) {
        if(this.props.cart.find(item => item.id === id)) {
            return (
                <button
                    className="add-to-cart-button"
                    onClick={() => this.props.removeFromCart(id)}
                >REMOVE</button>
            );
        }

        return (
            <button
                className="add-to-cart-button"
                onClick={() => this.props.addToCart({ id, title, price })}
            >ADD TO CART</button>
        );
    }

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
                    {this.renderButton(id, title, price)}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { cart: Object.values(state.cart) };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(Card);