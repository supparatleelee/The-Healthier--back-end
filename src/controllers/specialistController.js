const {
  user_role_2,
  video_status_public,
  video_status_private,
} = require('../config/constants');
const specialistService = require('../services/specialistService');
const appError = require('../utils/appError');
const cloudinary = require('../utils/cloudinary');
const { SpecialistVideo, User } = require('../models');
const fs = require('fs');

exports.getSpecialistData = async (req, res, next) => {
  try {
    const specialists = await specialistService.findSpecialists();
    res.status(200).json({ specialists });
  } catch (err) {
    next(err);
  }
};

// exports.registerSpecialists = async (req, res, next) => {
//   try {
//     const id = req.user.id;
//     const { role, area, description } = req.body;
//     const obj = { role };
//     await User.update(obj, { where: { id } });
//     res
//       .status(200)
//       .json({ message: 'Successfully registered as a specialist' });
//   } catch (err) {
//     console.log(err);
//   }
// };

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
      //อาจจะต้อง Include Course หรือ CourseVideo
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
