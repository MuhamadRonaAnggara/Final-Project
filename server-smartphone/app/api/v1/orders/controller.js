const orderService = require('../../../services/orderService');

const createOrder = async (req, res, next) => {
    const { name, email, address, type, color } = req.body;

    try {
        const order = await orderService.createOrder(name, email, address, type, color);
        res.status(201).json({
            status: 'success',
            data: order
        });
    } catch (err) {
        next(err);
    }
};

const getOrders = async (req, res, next) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json({
            status: 'success',
            data: orders
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { createOrder, getOrders };
