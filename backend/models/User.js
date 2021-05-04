const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "This field is required"]
    },
    email: {
        type: String,
        required: [true, "This field is required"]
    },
    password: {
        type: String,
        required: [true, "This field is required"]
    }
});

module.exports = model("User", UserSchema);