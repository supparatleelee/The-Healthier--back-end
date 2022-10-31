const express = require('express');
const historyController = require('../controllers/historyController');

const router = express.Router();

router.post('/payment', historyController.createPayment);

module.exports = router;
