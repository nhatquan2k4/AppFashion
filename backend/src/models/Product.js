// src/models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String, required: true },
    sizes: [{ type: Number, required: true }],
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    colors: [{
        color_name: { type: String, required: true },
        image_url: { type: String, required: true }
    }],
}, { timestamps: true });

module.exports = mongoose.model("Products", ProductSchema);




