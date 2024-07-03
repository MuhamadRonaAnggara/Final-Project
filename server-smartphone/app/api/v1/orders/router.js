const express = require('express');
const router = express.Router();
const orderController = require('./controller');
const auth = require('../../../middlewares/auth');

router.post('/order', orderController.createOrder);
router.get('/order', auth.authenticateUser, orderController.getOrders);

module.exports = router