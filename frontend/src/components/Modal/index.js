import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

import "./styles.scss";

const Modal = props => {
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
                    Items
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

export default Modal;