const {
  video_status_public,
  video_status_private,
} = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const SpecialistVideo = sequelize.define(
    'SpecialistVideo',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      videoFiles: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      videoStatus: {
        type: DataTypes.ENUM(video_status_public, video_status_private),
        defaultValue: video_status_public,
      },
    },
    { underscored: true }
  );
  SpecialistVideo.associate = (db) => {
    SpecialistVideo.belongsToMany(db.Session, {
      through: db.SessionVideo,
      foreignKey: 'specialistVideoId',
    });
    SpecialistVideo.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
  };
  return SpecialistVideo;
};
