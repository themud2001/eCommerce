import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

import "./styles.scss";

const Modal = () => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="content">
                <div className="header">
                    <h1>Title</h1>
                    <FaTimes size={26} />
                </div>

                <div className="items-list">
                    Items
                </div>

                <div className="total">
                    <h3>Your total is: 9.99$</h3>
                </div>

                <button>CHECKOUT</button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;