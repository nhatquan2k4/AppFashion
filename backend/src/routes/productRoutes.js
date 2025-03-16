const express = require("express");
const {
    getProducts,
    getProductByName,
    getProductById,
    createProduct,
    updateProductById,
    updateProductByName,
    deleteProductById,
    deleteProductByName
} = require("../controllers/productController");

const router = express.Router();

// Đổi từ "/get" thành "/" để mặc định lấy danh sách sản phẩm
router.get("/", getProducts);
router.get("/name/:name", getProductByName);
router.get("/id/:id", getProductById);
router.post("/", createProduct);
router.put("/id/:id", updateProductById);
router.put("/name/:name", updateProductByName);
router.delete("/id/:id", deleteProductById);
router.delete("/name/:name", deleteProductByName);

module.exports = router;
