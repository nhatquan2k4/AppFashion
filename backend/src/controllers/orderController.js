const Order = require("../models/Orders");
const Cart = require("../models/Carts");
const Product = require("../models/Product");

// 1. Tạo đơn hàng từ giỏ hàng
exports.createOrder = async (req, res) => {
    const { iduser } = req.body;

    try {
        const cart = await Cart.findOne({ iduser }).populate("items.productId");

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // Tính tổng tiền
        let totalAmount = 0;
        const orderItems = cart.items.map(item => {
            totalAmount += item.quantity * item.productId.price;
            return {
                productId: item.productId._id,
                name: item.productId.name,
                price: item.productId.price,
                quantity: item.quantity,
                size: item.size,
                color: item.color,
                image_url: item.productId.colors.find(c => c.color_name === item.color)?.image_url || null
            };
        });

        // Tạo đơn hàng
        const order = new Order({
            iduser,
            items: orderItems,
            totalAmount
        });

        await order.save();

        // Xóa giỏ hàng sau khi tạo đơn hàng
        await Cart.findOneAndDelete({ iduser });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Lấy danh sách đơn hàng của một user
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ iduser: req.params.iduser }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Lấy chi tiết một đơn hàng
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. Cập nhật trạng thái đơn hàng
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = req.body.status;
        await order.save();

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 5. Xóa đơn hàng
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId);
        res.json({ message: "Order deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
