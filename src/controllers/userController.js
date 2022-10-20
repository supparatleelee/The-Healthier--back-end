const AppError = require('../utils/appError');
const validator = require('validator');
const { User } = require('../models');

exports.updateUser = async (req, res, next) => {
  try {
    const { ...updateValue } = req.body;
    if (updateValue.years_of_experience) {
      updateValue.years_of_experience = new Date(
        Date.now() -
          +updateValue.years_of_experience * 365 * 24 * 60 * 60 * 1000
      );
    }
    await User.update(updateValue, { where: { id: req.user.id } });
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: {
        exclude: [
          'password',
          'goals',
          'googleId',
          'createdAt',
          'updatedAt',
          'area',
          'yearsOfExperience',
          'description',
          'address',
        ],
      },
    });
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
