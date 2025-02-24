const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },

    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    image_url: { type: String }

});

const OrderSchema = new mongoose.Schema({
    iduser: { type: String, required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },

    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
        default: "pending"
    },

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
