module.exports = (sequelize, DataTypes) => {
  const SpecialistVideo = sequelize.define(
    "SpecialistVideo",
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
    },
    { underscored: true }
  );
  SpecialistVideo.associate = (db) => {
    SpecialistVideo.hasMany(db.CourseVideo, {
      foreignKey: {
        name: "specialistVideoId",
        allowNull: false,
      },
    });
    SpecialistVideo.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
  };
  return SpecialistVideo;
};
