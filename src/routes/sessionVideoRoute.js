const express = require('express');
const sessionVideoController = require('../controllers/sessionVideoController');
const router = express.Router();

router.get('/', sessionVideoController.getSessionVideo);
router.post('/:sessionId', sessionVideoController.createSessionVideo);
router.patch('/:sessionId', sessionVideoController.updateSessionVideo);
router.delete('/:sessionId', sessionVideoController.deleteSessionVideo);
module.exports = router;
