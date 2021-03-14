import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ children, onSubmit, ...props }) => {
    const { register, handleSubmit, errors } = useForm({ mode: "onTouched" });

    const renderInput = component => {
        const { name, validationOptions, ...rest } = component.props;
        if(component.type === "input") {
            return <input
                key={name}
                name={name}
                className={errors[name] ? "error" : ""}
                ref={register(validationOptions)}
                {...rest}
            />;
        } else if(component.type === "textarea") {
            return <textarea
                key={name}
                name={name}
                className={errors[name] ? "error" : ""}
                ref={register(validationOptions)}
                {...rest}
            ></textarea>;
        }

        return component;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} {...props}>            
            {children.map(renderInput)}
        </form>
    );
}

Form.defaultProps = {
    children: []
};

export default Form;