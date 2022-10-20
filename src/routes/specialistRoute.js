const express = require('express');
const specialistController = require('../controllers/specialistController');
const router = express.Router();

router.get('/', specialistController.getSpecialistData);

module.exports = router;
