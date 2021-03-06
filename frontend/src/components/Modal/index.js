import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";

import { removeFromCart } from "../../actions";
import "./styles.scss";

const Modal = props => {
    console.log(props);
    const renderedProducts = () => {
        if(props.products.length !== 0) {
            return props.products.map(item => (
                <div className="cart-item" key={item.id}>
                    <div className="item-image">
                        <img width="150" height="150" />
                    </div>

                    <div className="item-description">
                        <h2>{item.title}</h2>
                        <h4>{item.price}$</h4>
                    </div>

                    <button
                        className="remove-button"
                        onClick={() => props.removeFromCart(item.id)}
                    >REMOVE</button>
                </div>
            ));
        }

        return <h3 style={{ textAlign: "center" }}>You have no items in your cart!</h3>
    }

    return ReactDOM.createPortal(
        <div
            onClick={e => { e.stopPropagation(); props.onClick(false) }}
            className="modal"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="content"
            >
                <div className="header">
                    <h1>Title</h1>
                    <FaTimes
                        onClick={() => props.onClick(false)}
                        size={26}
                    />
                </div>

                <div className="items-list">
                    {renderedProducts()}
                </div>

                <div className="bottom-content">
                    <h3>Your total is: 9.99$</h3>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

const mapStateToProps = state => {
    return { products: Object.values(state.cart) };
};

export default connect(mapStateToProps, { removeFromCart })(Modal);