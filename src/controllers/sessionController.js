const { Session } = require('../models');

exports.getSessions = async (req, res, next) => {
  const session = await Session.findAll();
  res.status(200).json({ session });
};
