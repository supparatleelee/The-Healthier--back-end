const express = require('express');
const sessionVideoController = require('../controllers/sessionVideoController');
const router = express.Router();

router.get('/', sessionVideoController.getAllSessionVideo);
router.post('/', sessionVideoController.createSessionVideo);
router.delete('/:sessionid', sessionVideoController.deleteSessionVideo);
module.exports = router;
