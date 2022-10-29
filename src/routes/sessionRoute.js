const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.get('/', sessionController.getSessions);
router.get('/get/:id', sessionController.getSessions);
router.get('/getMySpecialist', sessionController.getMySpecialists);
router.post('/:specialistId', sessionController.createSession);
router.patch('/:customerId', sessionController.updateSession);

module.exports = router;
