const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    iduser: { type: String, required: true, unique: true },
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    loyalty_points: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
