const Router = require('express');
const validatePaymentData = require('../middleware/validatePaymentData.js')
const payment = require('../controllers/payment.js');
const router = new Router();

router.post('/', validatePaymentData, async (req, res, next) => {
    await payment.makePayment(req, res, next);
});
module.exports = router;