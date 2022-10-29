const { Expertise } = require('../models');

exports.getAllExpertises = async (req, res, next) => {
  try {
    const allExpertise = await Expertise.findAll();
    res.status(200).json({ allExpertise });
  } catch (err) {
    next(err);
  }
};
