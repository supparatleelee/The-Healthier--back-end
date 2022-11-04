const {
  User,
  SpecialistExpertise,
  SpecialistVideo,
  Expertise,
} = require('../models');

exports.findSpecialists = async () => {
  const specialists = await User.findAll({
    where: { role: 'Specialist' },
    attributes: {
      exclude: ['password', 'goals', 'healthCoin', 'createdAt', 'updatedAt'],
    },
    include: [
      {
        model: Expertise,
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
        through: { attributes: [] },
      },
      { model: SpecialistVideo, attributes: { excluide: 'userId' } },
    ],
    order: [['updatedAt', 'DESC']],
  });
  return specialists;
};
