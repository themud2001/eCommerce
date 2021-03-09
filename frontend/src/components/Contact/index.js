import React from "react";

import "./styles.scss";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="header">
                <h1>Contact Us</h1>
            </div>

            <div className="form-container">
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" />

                    <label htmlFor="email">E-mail</label>
                    <input name="email" />

                    <label htmlFor="message">Your message</label>
                    <textarea name="message"></textarea>
                </form>
            </div>
        </div>
    );
};

export default Contact;