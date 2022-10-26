const { user_role_2 } = require('../config/constants');
const { SpecialistExpertise, Expertise } = require('../models');
const appError = require('../utils/appError');
exports.createSpecialistExpertise = async (req, res, next) => {
  try {
    const { expertiseIds } = req.body;
    const userId = req.user.id;

    if (req.user.role !== user_role_2) {
      throw new appError('Invalid role, please become a specialist first', 403);
    }

    for (const expertiseId of expertiseIds) {
      console.log(expertiseId);
      const expertise = await Expertise.findOne({ where: { id: expertiseId } });
      if (!expertise?.id) {
        throw new appError('Unavailable expertise', 400);
      }
      const data = { expertiseId: expertiseId, userId: userId };
      const newSpecialistExpertise = await SpecialistExpertise.create(data);
    }

    const createdSpecialistExpertise = await SpecialistExpertise.findAll({
      where: { userId: userId },
    });
    res.status(200).json({ specialistExpertise: createdSpecialistExpertise });
  } catch (err) {
    next(err);
  }
};

exports.deleteSpecialistExpertise = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { expertiseId } = req.body;

    if (req.user.role !== user_role_2) {
      throw new appError('No permission', 403);
    }
    await SpecialistExpertise.destroy({
      where: { userId: userId, expertiseId: expertiseId },
    });
    const specialistExpertise = await SpecialistExpertise.findAll({
      where: { userId: userId },
    });

    res.status(200).json({ specialistExpertise: specialistExpertise });
  } catch (err) {
    next(err);
  }
};
