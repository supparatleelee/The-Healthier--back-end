const {
  user_role_2,
  video_status_public,
  video_status_private,
} = require('../config/constants');

const appError = require('../utils/appError');
const cloudinary = require('../utils/cloudinary');
const { SpecialistVideo, sequelize } = require('../models');
const fs = require('fs');

exports.uploadVideo = async (req, res, next) => {
  try {
    const { name, videoStatus } = req.body;

    if (req.user.role !== user_role_2) {
      throw new appError("you don't permission to upload videos", 403);
    }
    if (!name || !name.trim() || !videoStatus || !req.file) {
      throw new appError(
        'name of video, video status and video file are required',
        400
      );
    }
    if (
      videoStatus !== video_status_public &&
      videoStatus !== video_status_private
    ) {
      throw new appError('videoStatus not correct format', 403);
    }

    const data = { userId: req.user.id };
    if (name && name.trim()) {
      data.name = name;
    }
    data.videoStatus = videoStatus;
    if (req.file) {
      data.videoFiles = await cloudinary.upload(req.file.path);
    }

    const newVideo = await SpecialistVideo.create(data);
    const videos = await SpecialistVideo.findAll({
      where: { userId: req.user.id },
    });
    res.status(201).json({ videos });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

exports.deleteVideo = async (req, res, next) => {
  let t;
  try {
    t = await sequelize.transaction();
    const video = await SpecialistVideo.findOne({
      where: { id: req.params.videoId },
    });
    if (!video) {
      throw new appError('video was not found', 400);
    }
    if (req.user.id !== video.userId) {
      throw new appError('no permission to delete', 403);
    }
    await SpecialistVideo.destroy({
      transaction: t,
      where: { id: req.params.videoId },
    });
    await t.commit();
    res.status(200).json({ message: 'success delete' });
  } catch (err) {
    await t.rollback();
    next(err);
  }
};

exports.updateVideo = async (req, res, next) => {
  try {
    const { ...updateValue } = req.body;
    const videoId = updateValue?.id;
    const video = await SpecialistVideo.findOne({ where: { id: videoId } });

    if (!video) {
      throw new appError('Video not found', 400);
    }
    if (+req.user.id !== +video.userId) {
      throw new appError("you don't permission to update videos", 403);
    }

    if (updateValue?.videoStatus) {
      if (
        updateValue?.videoStatus !== video_status_public &&
        updateValue?.videoStatus !== video_status_private
      ) {
        throw new appError('videoStatus not correct format', 400);
      }
    }
    if (!updateValue?.name) {
      throw new appError('Video must have name', 400);
    }
    if (updateValue?.name.trim() === '') {
      throw new appError('Video must have name', 400);
    }
    updateValue.name = updateValue?.name.trim();
    await SpecialistVideo.update(updateValue, { where: { id: videoId } });
    const updatedVideo = await SpecialistVideo.findOne({
      where: { id: videoId },
    });
    res.status(200).json({ updatedVideo });
  } catch (err) {
    next(err);
  }
};

exports.getPublicVideoBySpecialistId = async (req, res, next) => {
  try {
    const specialistId = req.params.specialistId;
    const videos = await SpecialistVideo.findAll({
      where: { userId: specialistId, videoStatus: video_status_public },
    });
    res.status(200).json({ videos });
  } catch (err) {
    next(err);
  }
};

exports.getMyVideoByUserId = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const videos = await SpecialistVideo.findAll({ where: { userId } });
    res.status(200).json({ videos });
  } catch (err) {
    next(err);
  }
};
