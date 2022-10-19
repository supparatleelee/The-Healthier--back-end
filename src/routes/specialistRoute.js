const express = require('express');
const authenticate = require('../middlewares/authenticate');
const specialistController = require('../controllers/specialistController');
const router = express.Router();

router.get('/', authenticate, specialistController.getSpecialistData);

module.exports = router;
