// src/controllers/productController.js
const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.getProductByName = async (req, res) => {
    try {
        const productName = req.params.name;

        // Tìm sản phẩm theo tên (không phân biệt hoa thường)
        const product = await Product.findOne({ name: { $regex: new RegExp(productName, "i") } });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.getProductById = async (req, res) => {
    try {

        const getProductbyid = await Product.findById({ id: req.params.id });
        if (!getProductbyid) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(getProductbyid);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}



exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.updateProductById = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.updateProductByName = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { name: { $regex: new RegExp(req.params.name, "i") } },
            { $set: req.body },
            { new: true, timestamps: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found to update" })
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}



exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.deleteProductByName = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ name: req.params.name });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.json({ message: "Product deleted successfully!", product: deletedProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



