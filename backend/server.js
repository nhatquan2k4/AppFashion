const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load biến môi trường từ file .env
dotenv.config();

// Kiểm tra biến môi trường quan trọng
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in .env file");
    process.exit(1);
}

// Tạo ứng dụng Express
const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cartRoutes = require("./src/routes/cartRoutes")
const orderRoutes = require("./src/routes/orderRoutes");
// Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/carts", cartRoutes)
app.use("/orders", orderRoutes);

// Lấy URI từ biến môi trường
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });

        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};


mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Error:", err);
});


const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}: http://localhost:${PORT}`);
    });
};


startServer();