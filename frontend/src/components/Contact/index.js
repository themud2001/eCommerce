import React from "react";

import Form from "../Form";
import "./styles.scss";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="header">
                <h1>Contact Us</h1>
            </div>

            <div className="form-container">
                <Form />
            </div>
        </div>
    );
};

export default Contact;