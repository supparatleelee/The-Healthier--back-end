const express = require('express');
const videoController = require('../controllers/videoController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.route('/').post(upload.single('video'), videoController.uploadVideo);
router.delete('/:id', videoController.deleteVideo);
router.post('/:id', videoController.updateVideo);
router.get('/:specialistId', videoController.getPublicVideoBySpecialistId);
router.get('/', videoController.getMyVideoByUserId);

module.exports = router;
