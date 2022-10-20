const express = require('express');
const videoController = require('../controllers/videoController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.route('/').post(upload.single('video'), videoController.uploadVideo);
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
