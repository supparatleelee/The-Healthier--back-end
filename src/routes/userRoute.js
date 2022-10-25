const express = require('express');
const userController = require('../controllers/userController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.patch('/kyc', upload.single('profileImage'), userController.updateUser);

module.exports = router;
