const express = require('express');
const specialistController = require('../controllers/specialistController');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .get('/', specialistController.getSpecialistData)
  .patch('/', userController.updateUser);

module.exports = router;
