const {
  User,
  SpecialistExpertise,
  SpecialistVideo,
  Expertise,
} = require('../models');
const { Op } = require('sequelize');

exports.findSpecialists = async () => {
  const specialists = await User.findAll({
    where: { role: 'Specialist' },
    attributes: { exclude: 'password' },
    include: [
      {
        model: SpecialistExpertise,
        attributes: { exclude: 'userId' },
        include: { Expertise }, //ตรงนี้ยังไม่แน่ใจว่าจะดึงมายังไงครับ
      },
      { model: SpecialistVideo, attributes: { excluide: 'userId' } },
    ],
    order: [['updatedAt', 'DESC']],
  });
  return specialists;
};

exports.recommendedSpecialists = async () => {
  const user = req.user;
  let matchingExpertise;
  switch (user.goals) {
    case 'Back Pain':
      matchingExpertise = [''];
      break;
    case 'Neck and Shoulder Ache':
      matchingExpertise = [''];
      break;
    case 'Headache':
      matchingExpertise = [''];
      break;
    case 'Lowerbody Pain':
      matchingExpertise = [''];
      break;
    case 'Ready to Play':
      matchingExpertise = [''];
      break;
    case 'After Surgery Recovery':
      matchingExpertise = [''];
      break;
    case 'Slimming':
      matchingExpertise = [''];
      break;
    case 'Burn Fat':
      matchingExpertise = [''];
      break;
    case 'Building Muscle':
      matchingExpertise = [''];
      break;
    case 'Just for Fun':
      matchingExpertise = [''];
      break;
    case 'Other':
      matchingExpertise = [''];
      break;
    default:
      break;
  }

  const recommendedSpecialists = await User.findAll({
    where: { [Op.and]: [{ role: 'Specialist' }, { a: 5 }, { b: 6 }] },
    attributes: { exclude: 'password' },
    include: [
      {
        model: SpecialistExpertise,
        attributes: { exclude: 'userId' },
        include: { Expertise }, //ตรงนี้ยังไม่แน่ใจว่าจะดึงมายังไงครับ
      },
      { model: SpecialistVideo, attributes: { excluide: 'userId' } },
    ],
    order: [['updatedAt', 'DESC']],
  });
  return specialists;
};
