const {
  Session,
  Package,
  User,
  History,
  SpecialistVideo,
  Expertise,
} = require('../models');
const appError = require('../utils/appError');
const { user_role_2 } = require('../config/constants');

exports.getSessions = async (req, res, next) => {
  try {
    const session = await Session.findAll({
      where: { customerId: req.user.id, specialistId: +req.params.id },
      include: [
        {
          model: User,
          as: 'specialist',
          attributes: { exclude: 'password' },
          include: [
            {
              model: Expertise,
              attributes: {
                exclude: ['id', 'createdAt', 'updatedAt'],
              },
              through: { attributes: [] },
            },
          ],
        },
      ],
    });
    res.status(200).json({ session });
  } catch (err) {
    next(err);
  }
};

exports.getMySpecialists = async (req, res, next) => {
  try {
    const mySpecialist = await Session.findAll({
      where: {
        customerId: req.user.id,
      },
      exclude: ['customerId'],
      include: [
        {
          model: User,
          as: 'specialist',
          attributes: {
            exclude: ['id', 'createdAt', 'updatedAt', 'password'],
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
        },
      ],
    });
    res.status(200).json(mySpecialist);
  } catch (err) {
    next(err);
  }
};

exports.createSession = async (req, res, next) => {
  try {
    const specialistId = req.params.specialistId;
    const data = { customerId: req.user.id };
    const { courseDuration } = req.body;
    const currentSession = await Session.findOne({
      where: { customerId: req.user.id, specialistId: specialistId },
      order: [['createdAt', 'DESC']],
    });
    console.log(currentSession?.completed);
    if (currentSession?.completed == false) {
      throw new appError(
        'Your session with this specialist is not completed',
        400
      );
    }

    const history = await History.findOne({
      where: { userId: data.customerId },
      include: { model: Package },
      order: [['createdAt', 'DESC']],
    });

    const specialist = await User.findOne({ where: { id: specialistId } });
    if (+req.user.id === +specialistId) {
      throw new appError('Invalid Session', 400);
    }
    if (specialist.role !== user_role_2) {
      throw new appError('you are not booking with specialist', 400);
    }

    if (
      Date.now() - history?.createdAt >
      history?.Package.duration * 24 * 60 * 60 * 1000
    ) {
      throw new appError('your package is expired', 400);
    }

    console.log(Date.now() - history?.createdAt);

    console.log(courseDuration * 24 * 60 * 60 * 1000);
    if (
      Date.now() - history?.createdAt >=
      courseDuration * 24 * 60 * 60 * 1000
    ) {
      throw new appError(
        'your package time is not enough for course time',
        400
      );
    }

    if (req.user?.healthCoin <= 0) {
      throw new appError(
        "you don't have enough health coin, please buy new package",
        400
      );
    }

    data.startDate = Date.now();
    data.completed = 0;
    data.specialistId = specialistId;
    data.courseDuration = courseDuration;

    const createSession = await Session.create(data);
    const session = await Session.findOne({
      where: { customerId: req.user.id },
    });
    const newHealthCoin = req.user?.healthCoin - 1;
    await User.update(
      { healthCoin: newHealthCoin },
      { where: { id: req.user.id } }
    );
    res.status(201).json({ session: session });
  } catch (err) {
    next(err);
  }
};

exports.updateSession = async (req, res, next) => {
  try {
    const { ...updateValue } = req.body;
    const specialistId = req.user.id;
    const customerId = req.params.customerId;

    if (req.user.role !== user_role_2) {
      throw new appError("you don't permission to edit session", 403);
    }

    const currentSession = await Session.findOne({
      where: { customerId: customerId, specialistId: specialistId },
    });

    if (!currentSession) {
      throw new appError('Session not found', 400);
    }

    if (updateValue?.followUpDate) {
      if (updateValue.followUpDate < currentSession.createdAt) {
        throw new appError('Follow up date is out of course period', 400);
      }
      if (
        updateValue?.followUpDate >
        currentSession.createdAt + courseDuration * 24 * 60 * 60 * 1000
      ) {
        throw new appError('Follow up date is out of course period', 400);
      }
    }
    await Session.update(updateValue, { where: { id: currentSession?.id } });

    const newSession = await Session.findOne({
      where: { customerId: customerId, specialistId: specialistId },
    });
    res.status(200).json({ session: newSession });
  } catch (err) {
    next(err);
  }
};
