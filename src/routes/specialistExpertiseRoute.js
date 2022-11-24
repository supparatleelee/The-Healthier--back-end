const express = require('express');
const specialistExpertiseController = require('../controllers/specialistExpertiseController');
const { route } = require('./authRoute');
const router = express.Router();

router.post('/', specialistExpertiseController.createSpecialistExpertise);

router.delete('/', specialistExpertiseController.deleteSpecialistExpertise);
module.exports = router;
