import React from "react";

import "./styles.scss";

class Form extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="name">Full Name</label>
                <input name="name" />

                <label htmlFor="email">E-mail</label>
                <input name="email" />

                <label htmlFor="message">Your message</label>
                <textarea name="message"></textarea>

                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}

export default Form;