const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    title: String,
    price: Number
});

module.exports = model("Product", ProductSchema);