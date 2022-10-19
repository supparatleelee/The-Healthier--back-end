const specialistService = require('../services/specialistService');
exports.getSpecialistData = async (req, res, next) => {
  try {
    const specialists = await specialistService.findSpecialists();
    res.status(200).json({ specialists });
  } catch (err) {
    next(err);
  }
};
