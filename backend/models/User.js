const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Specify a valid username"]
    },
    email: {
        type: String,
        validate: {
            validator: value => /[A-Za-z0-9!#$%&'*+\-/=\^_`{|]+@[A-Za-z0-9]+\.[A-Za-z]+/.test(value),
            message: props => `${props.value} is not a valid E-mail`
        },
        required: [true, "Specify a valid E-mail"]
    },
    password: {
        type: String,
        required: [true, "Specify a valid password"]
    }
});

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getToken = function () {
    return jwt.sign({ username: this.username }, process.env.JWT_SECRET);
};

module.exports = model("User", UserSchema);