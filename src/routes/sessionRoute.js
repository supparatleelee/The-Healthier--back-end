const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.get('/', sessionController.getSessions);
router.post('/:specialistId', sessionController.createSession);
router.patch('/:customerId', sessionController.updateSession);

module.exports = router;
