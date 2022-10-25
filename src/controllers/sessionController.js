const { Session, Package, User } = require('../models');
const appError = require('../utils/appError');

exports.getSessions = async (req, res, next) => {
  const session = await Session.findAll();
  res.status(200).json({ session });
};

exports.createSession = async (req, res, next) => {
  try {
    const data = { userId: req.user.id };
    const { couerseDuration } = req.body;
    const history = await History.findOne({
      where: { userId: data.userId },
      include: { model: Package },
      order: [['createdAt', 'DESC']],
    });
    //Check package ยังไม่หมดอายุ
    if (
      Date.now() - history?.createdAt >
      history?.Package.duration * 24 * 60 * 60 * 1000
    ) {
      throw new appError('your package is expired', 400);
    }
    if (
      Date.now() - history?.createdAt <
      couerseDuration * 24 * 60 * 60 * 1000
    ) {
      //Check package duration มากว่า course Duration
      throw new appError(
        'your package time is not enough for course time',
        400
      );
    }
    //Check user healthcoin ,
    if (req.user?.healthCoin <= 0) {
      throw new appError(
        "you don't have enough health coin, please buy new package",
        400
      );
    }

    const specialistId = req.params.specialistId;
    data.startDate = Date.now();
    data.complete = 0;
    data.specialistId = specialistId;

    const createSession = await Session.create(data);
    const userSession = await Session.findOne({
      where: { customerId: req.user.id },
    });
    const newHealthCoin = req.user?.healthCoin - 1;
    await User.update(
      { healthCoin: newHealthCoin },
      { where: { id: req.user.id } }
    );
    res.status(201).json({ userSession });
  } catch (err) {
    next(err);
  }
};
