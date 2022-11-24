const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/googlelogin', authController.googleLogin);
router.get('/me', authenticate, authController.getMe);
// router.get('/resetPassword', authenticate, authController.resetPassword);

module.exports = router;
