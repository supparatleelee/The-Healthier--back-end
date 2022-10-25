const express = require('express');
const historyController = require('../controllers/historyController');

const router = express.Router();

router.post('/:id', historyController.updateHistory);

module.exports = router;
