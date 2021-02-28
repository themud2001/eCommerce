import React from "react";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";

import "./styles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="title-container">
                <h1>eCommerce - Online Shopping</h1>
            </div>

            <div className="payment-methods">
                <FaCcPaypal color="white" size={32} />
                <FaCcMastercard color="white" size={32} />
                <FaCcVisa color="white" size={32} />
            </div>
        </div>
    );
};

export default Footer;