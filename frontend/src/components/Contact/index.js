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
                <Form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" validationOptions={{ required: true }} />

                    <label htmlFor="email">E-mail</label>
                    <input name="email" validationOptions={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i }} />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" validationOptions={{ required: true }}></textarea>

                    <button type="submit">SUBMIT</button>
                </Form>
            </div>
        </div>
    );
};

export default connect(null, { sendContactMessage })(Contact);