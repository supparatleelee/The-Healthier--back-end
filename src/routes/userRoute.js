const express = require('express');
const authenticate = require('../middlewares/authenticate');
const userController = require('../controllers/userController');
const router = express.Router();

router.patch('/kyc', authenticate, userController.updateUser);

module.exports = router;
