module.exports = (sequelize, DataTypes) => {
  const SessionVideo = sequelize.define(
    'SessionVideo',
    {},
    { underscored: true, timestamps: false }
  );

  return SessionVideo;
};
