const express = require('express');
const videoController = require('../controllers/videoController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.route('/').post(upload.single('video'), videoController.uploadVideo);
router.post('/updateVideo', videoController.updateVideo);
router.delete('/:videoId', videoController.deleteVideo);
router.get('/:specialistId', videoController.getPublicVideoBySpecialistId);
router.get('/', videoController.getMyVideoByUserId);

module.exports = router;
