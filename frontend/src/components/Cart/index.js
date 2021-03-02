import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <button
            onClick={() => setModalOpened(true)}
            className="item cart"
        >
            <FiShoppingCart size={22} />
        </button>
    );
};

export default Cart;