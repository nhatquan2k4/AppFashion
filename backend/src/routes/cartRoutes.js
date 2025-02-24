const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/get/:iduser", cartController.getCart);
router.post("/add", cartController.addToCart);
router.put("/update", cartController.updateCartItem);
router.delete("/remove", cartController.removeCartItem);
router.delete("/clear/:userId", cartController.clearCart);
router.post("/create", cartController.createCart);

module.exports = router;

