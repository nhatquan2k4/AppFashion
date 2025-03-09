const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/FashionApp";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Định nghĩa controller cho sản phẩm
const {
    getProducts,
    getProductByName,
    getProductById,
    createProduct,
    updateProductById,
    updateProductByName,
    deleteProductById,
    deleteProductByName
} = require("./src/controllers/productController");

// Định tuyến API sản phẩm
const productRouter = express.Router();
productRouter.get("/get", getProducts);
productRouter.get("/get/name/:name", getProductByName);
productRouter.get("/get/id/:id", getProductById);
productRouter.post("/create", createProduct);
productRouter.put("/update/id/:id", updateProductById);
productRouter.put("/update/name/:name", updateProductByName);
productRouter.delete("/delete/id/:id", deleteProductById);
productRouter.delete("/delete/name/:name", deleteProductByName);
app.use("/api/products", productRouter);

// Định tuyến API xác thực (auth)
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
