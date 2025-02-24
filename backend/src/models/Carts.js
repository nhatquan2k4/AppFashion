const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    quantity: { type: Number, default: 1, min: 1 },
    size: { type: Number, required: true },
    color: { type: String, required: true },
}, { _id: false });

const CartSchema = new mongoose.Schema({
    iduser: { type: String, required: true },
    items: [CartItemSchema],
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);
