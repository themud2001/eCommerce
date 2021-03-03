import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

import Modal from "../Modal";

const Cart = () => {
    const [modalOpened, setModalOpened] = useState(false);

    const renderModal = () => {
        if(modalOpened) {
            return <Modal />
        }

        return null;
    };

    return (
        <button
            onClick={() => setModalOpened(true)}
            className="item cart"
        >
            <FiShoppingCart size={22} />
            {renderModal()}
        </button>
    );
};

export default Cart;