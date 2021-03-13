import React from "react";
import { connect } from "react-redux";

import { sendContactMessage } from "../../actions";
import Form from "../Form";
import "./styles.scss";

const Contact = props => {
    const handleFormSubmit = formValues => {
        props.sendContactMessage(formValues);
    };

    return (
        <div className="contact-container">
            <div className="header">
                <h1>Contact Us</h1>
            </div>

            <div className="form-container">
                <Form onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};

export default connect(null, { sendContactMessage })(Contact);