// src/routes/productRoutes.js
const express = require("express");
const {
    getProducts,
    getProductByName,
    getProductById,
    createProduct,
    updateProductById,
    updateProductByName,
    deleteProductById,
    deleteProductByName } = require("../controllers/productController");
const router = express.Router();

router.get("/get", getProducts);
router.get("/get/name/:name", getProductByName);
router.get("/get/id/:id", getProductById);
router.post("/create/", createProduct);
router.put("/update/id/:id", updateProductById);
router.put("/update/name/:name", updateProductByName);
router.delete("/delete/id/:id", deleteProductById);
router.delete("/delete/name/:name", deleteProductByName);


module.exports = router;