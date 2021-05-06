const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "This field is required"]
    },
    email: {
        type: String,
        validate: {
            validator: value => /[A-Za-z0-9!#$%&'*+\-/=\^_`{|]+@[A-Za-z0-9]+\.[A-Za-z]+/.test(value),
            message: props => `${props.value} is not a valid E-mail`
        },
        required: [true, "This field is required"]
    },
    password: {
        type: String,
        required: [true, "This field is required"]
    }
});

module.exports = model("User", UserSchema);