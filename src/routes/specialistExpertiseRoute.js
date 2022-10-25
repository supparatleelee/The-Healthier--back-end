const express = require('express');
const specialistExpertiseController = require('../controllers/specialistExpertiseController');
const { route } = require('./authRoute');
const router = express.Router();

router.get('/', specialistExpertiseController.getSpecialistExpertise);
router.post(
  '/:sessionId',
  specialistExpertiseController.createSpecialistExpertise
);
router.patch(
  '/:sessionId',
  specialistExpertiseController.updateSpecialistExpertise
);
router.delete(
  '/:sessionId',
  specialistExpertiseController.deleteSpecialistExpertise
);
module.exports = router;
