const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

router.get('/getAllRoom', chatController.getAllRoom);
router.post('/newMessage', chatController.newMessage);
router.get('/:id', chatController.getChat);
module.exports = router;
