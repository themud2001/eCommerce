import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="header">
                <h1>Title</h1>
            </div>

            <div className="content">
                Items
            </div>

            <div className="checkout">
                <button>CHECKOUT</button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;