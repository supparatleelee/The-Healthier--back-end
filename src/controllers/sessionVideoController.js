const { user_role_1, user_role_2 } = require('../config/constants');
const { Session, SessionVideo, SpecialistVideo, User } = require('../models');
const { Op } = require('sequelize');
const appError = require('../utils/appError');

exports.getAllSessionVideo = async (req, res, next) => {
  try {
    const role = req.user.role;
    let session;
    if (role === user_role_1) {
      session = await Session.findAll({
        where: { customerId: req.user.id },
        attributes: {
          exclude: [
            'followUpDate',
            'completed',
            'courseDuration',
            'createdAt',
            'updatedAt',
            'startDate',
            'customerId',
          ],
        },
      });
    } else {
      session = await Session.findAll({
        where: { specialistId: req.user.id },
        attributes: {
          exclude: [
            'followUpDate',
            'completed',
            'courseDuration',
            'createdAt',
            'updatedAt',
            'startDate',
            'specialistId',
          ],
        },
      });
    }
    const sessionVideo = await Session.findAll({
      where: {
        id: session.map((item) => item.id),
      },
      include: [
        { model: SpecialistVideo, through: { attributes: [] } },
        { model: User, as: 'customer', attributes: { exclude: 'password' } },
      ],
    });
    res.status(200).json({ sessionVideo });
  } catch (err) {
    next(err);
  }
};

exports.createSessionVideo = async (req, res, next) => {
  try {
    const { sessionId, specialistVideoIds } = req.body;

    const role = req.user.role;
    if (role !== user_role_2) {
      throw new appError(
        'You have no permission to add video, please become a specialist first',
        403
      );
    }

    const session = await Session.findOne({ where: { id: sessionId } });
    if (!session?.specialistId || session?.specialistId !== req.user.id) {
      throw new appError(
        'You have no permission to add video, please match with your customer first',
        403
      );
    }

    for (const videoId of specialistVideoIds) {
      const video = await SpecialistVideo.findOne({
        where: { id: videoId },
      });
      if (!video?.userId || video?.userId !== req.user.id) {
        throw new appError(
          'You have no permission to add video, please upload your video first',
          400
        );
      }
      const data = { specialistVideoId: videoId, sessionId: sessionId };
      const newSessionVideo = await SessionVideo.create(data);
    }

    const createdSessionVideo = await SessionVideo.findAll({
      where: { sessionId: sessionId },
    });
    res.status(201).json({ sessionVideo: createdSessionVideo });
  } catch (err) {
    next(err);
  }
};

exports.deleteSessionVideo = async (req, res, next) => {
  try {
    const sessionId = req.params.sessionid;
    const { specialistVideoId } = req.body;

    const video = await SpecialistVideo.findOne({
      where: { id: specialistVideoId },
    });
    if (video?.userId !== req.user.id) {
      throw new appError("you don't have permission to delete", 403);
    }

    await SessionVideo.destroy({
      where: { sessionId: sessionId, specialistVideoId: specialistVideoId },
    });
    const sessionVideo = await SessionVideo.findAll({
      where: { sessionId: sessionId },
    });

    res.status(200).json({ sessionVideo });
  } catch (err) {
    next(err);
  }
};
