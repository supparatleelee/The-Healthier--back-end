const express = require('express');
const expertisesController = require('../controllers/expertiseController');
const router = express.Router();

router.get('/', expertisesController.getAllExpertises);

module.exports = router;
