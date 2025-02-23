const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        iduser: { type: String, unique: true, required: true },
        full_name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        phone: { type: String, required: true, trim: true },
        address: { type: String, required: true, trim: true },
        loyalty_points: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
