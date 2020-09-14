const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

///create-checkout-session

router.post('/', checkoutController.checkout);
module.exports = router;
