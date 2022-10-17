const AppError = require('../utils/appError');
const validator = require('validator');
const { User } = require('../models');

exports.updateUser = async (req, res, next) => {
  try {
    const { ...updateValue } = req.body;
    await User.update(updateValue, { where: { id: req.user.id } });
    const user = await User.findOne({ where: { id: req.user.id } });
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
