import React from "react";
import { Field, reduxForm } from "redux-form";

import "./styles.scss";

class Form extends React.Component {
    renderInput({ input, label, meta}) {
        if(input.name === "message") {
            return (
                <React.Fragment>
                    <label
                        className={meta.touched && meta.error ? "error" : ""}
                        htmlFor={input.name}
                    >{label}</label>
                    <textarea
                        className={meta.touched && meta.error ? "error" : ""}
                        placeholder={meta.touched && meta.error ? meta.error : ""}
                        {...input}
                    ></textarea>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <label
                    className={meta.touched && meta.error ? "error" : ""}
                    htmlFor={input.name}
                >{label}</label>
                <input
                    className={meta.touched && meta.error ? "error" : ""}
                    placeholder={meta.touched && meta.error ? meta.error : ""}
                    {...input}
                />
            </React.Fragment>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Full Name" />
                <Field name="email" component={this.renderInput} label="E-mail" />
                <Field name="message" component={this.renderInput} label="Your Message" />
                <button type="submit">SUBMIT</button>
            </form>
        );
    }
}

const validate = ({name="", email="", message=""}) => {
    const errors = {};

    if(name.trim() === "") {
        errors.name = "Required";
    }

    if(email.trim() === "") {
        errors.email = "Required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid E-mail!";
    }

    if(message.trim() === "") {
        errors.message = "Required";
    }

    return errors;
}

export default reduxForm({
    form: "contactForm",
    validate
})(Form);