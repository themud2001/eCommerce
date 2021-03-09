import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

import Modal from "../Modal";

const products = [
    { id: 1, title: "T-Shirt", price: 4.99 },
    { id: 2, title: "Skirt", price: 14.99 },
    { id: 3, title: "Hoody", price: 36.99 },
    { id: 4 , title: "Pants", price: 9.99 }
];

const Cart = () => {
    const [modalOpened, setModalOpened] = useState(false);

    const renderModal = () => {
        if(modalOpened) {
            return (
                <Modal
                    products={products}
                    onClick={setModalOpened}
                />
            );
        }
    };
    return (
        <button
            style={{ outline: "none" }}
            onClick={() => setModalOpened(true)}
            className="item cart"
        >
            <FiShoppingCart size={22} />
            {renderModal()}
        </button>
    );
};

export default Cart;