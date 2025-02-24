const Cart = require("../models/Carts");
const Product = require("../models/Product");

// 1. Lấy giỏ hàng của người dùng
exports.addToCart = async (req, res) => {
    const { iduser, productId, quantity, size, color } = req.body;

    try {
        let cart = await Cart.findOne({ iduser });

        if (!cart) {
            cart = new Cart({ iduser, items: [] });
            await cart.save();
        }
        // Kiểm tra xem sản phẩm có tồn tại không
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const existingItem = cart.items.find(
            item => item.productId.equals(productId) && item.size === size && item.color === color
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity, size, color });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// 2. Thêm sản phẩm vào giỏ hàng
exports.addToCart = async (req, res) => {
    const { iduser, productId, quantity, size, color } = req.body;

    try {
        let cart = await Cart.findOne({ iduser });

        if (!cart) {
            cart = new Cart({ iduser, items: [] });
            await cart.save();
        }

        // Kiểm tra xem sản phẩm có tồn tại không
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const existingItem = cart.items.find(
            item => item.productId.equals(productId)
                && item.size === size && item.color === color
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity, size, color });
        }

        await cart.save();

        // Populate để lấy thông tin sản phẩm đầy đủ
        await cart.populate("items.productId");

        // Format response để trả về đầy đủ thông tin sản phẩm
        const cartItems = cart.items.map(item => ({
            productId: item.productId._id,
            name: item.productId.name,
            price: item.productId.price,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            image_url: item.productId.colors.find(c => c.color_name === item.color)?.image_url || null
        }));

        res.status(200).json({ iduser, items: cartItems });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// 3. Cập nhật số lượng sản phẩm trong giỏ hàng
exports.updateCartItem = async (req, res) => {
    const { iduser, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ iduser });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (item) {
            item.quantity = quantity;
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. Xóa sản phẩm khỏi giỏ hàng
exports.removeCartItem = async (req, res) => {
    const { iduser, productId } = req.body;

    try {
        let cart = await Cart.findOne({ iduser });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 5. Xóa toàn bộ giỏ hàng
exports.clearCart = async (req, res) => {
    try {
        const { iduser } = req.body;
        let cart = await Cart.findOne({ iduser });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        await Cart.findOneAndDelete({ iduser });
        res.json({ message: "Cart cleared" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 6. Tạo giỏ hàng mới
exports.createCart = async (req, res) => {
    const { iduser } = req.body;

    try {
        let cart = await Cart.findOne({ iduser });

        if (cart) {
            return res.status(400).json({ message: "Cart already exists for this user" });
        }

        cart = new Cart({ iduser, items: [] });
        await cart.save();

        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
