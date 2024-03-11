
const { body, validationResult } = require("express-validator");
const validatePaymentData = [
    body('userID').isInt({ min: 1 }).toInt(),
    body('amount').isFloat({ min: 0 }).toFloat(),
    (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      next();
    }
  ];
module.exports = validatePaymentData