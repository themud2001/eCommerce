import React from "react";
import { Field, reduxForm } from "redux-form";

import "./styles.scss";

class Form extends React.Component {
    renderInput({ input, label, meta }) {
        console.log(meta);
        if(input.name === "message") {
            return (
                <React.Fragment>
                    <label htmlFor={input.name}>{label}</label>
                    <textarea {...input}></textarea>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <label htmlFor={input.name}>{label}</label>
                <input {...input} />
            </React.Fragment>
        );
    }

    render() {
        return (
            <form>
                <Field name="name" component={this.renderInput} label="Full Name" />
                <Field name="email" component={this.renderInput} label="E-mail" />
                <Field name="message" component={this.renderInput} label="Your Message" />
                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "contactForm",
    validate: () => 10
})(Form);