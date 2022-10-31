const { Package } = require('../models');

exports.getPackagess = async (req, res, next) => {
  console.log(req.user);
  const packages = await Package.findAll();
  res.status(200).json({ packages });
};
