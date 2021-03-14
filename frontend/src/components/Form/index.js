import React from "react";
// import { Field, reduxForm } from "redux-form";
import { useForm } from "react-hook-form";

import "./styles.scss";

const Form = props => {
    const { register, handleSubmit } = useForm({ mode: "onTouched" });

    const renderInput = component => {
        if(component.type === "input") {
            return <input key={component.props.name} ref={register} {...component.props} />;
        } else if(component.type === "textarea") {
            return <textarea key={component.props.name} ref={register} {...component.props}></textarea>;
        }

        return component;

        // if(input.name === "message") {
        //     return (
        //         <React.Fragment>
        //             <label
        //                 className={meta.touched && meta.error ? "error" : ""}
        //                 htmlFor={input.name}
        //             >{label}</label>
        //             <textarea
        //                 className={meta.touched && meta.error ? "error" : ""}
        //                 placeholder={meta.touched && meta.error ? meta.error : ""}
        //                 {...input}
        //             ></textarea>
        //         </React.Fragment>
        //     );
        // }

        // return (
        //     <React.Fragment>
        //         <label
        //             className={meta.touched && meta.error ? "error" : ""}
        //             htmlFor={input.name}
        //         >{label}</label>
        //         <input
        //             className={meta.touched && meta.error ? "error" : ""}
        //             placeholder={meta.touched && meta.error ? meta.error : ""}
        //             {...input}
        //         />
        //     </React.Fragment>
        // );
    };

    return (
        <form onSubmit={handleSubmit(() => console.log("Hey"))}>
            {/* <Field name="name" component={this.renderInput} label="Full Name" />
            <Field name="email" component={this.renderInput} label="E-mail" />
            <Field name="message" component={this.renderInput} label="Your Message" /> */}
            
            {props.children.map(renderInput)}
        </form>
    );
}

// const validate = ({name="", email="", message=""}) => {
//     const errors = {};

//     if(name.trim() === "") {
//         errors.name = "Required";
//     }

//     if(email.trim() === "") {
//         errors.email = "Required";
//     } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//         errors.email = "Invalid E-mail!";
//     }

//     if(message.trim() === "") {
//         errors.message = "Required";
//     }

//     return errors;
// }

export default Form;