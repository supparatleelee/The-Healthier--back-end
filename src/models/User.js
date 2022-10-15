const {
  user_gender_male,
  user_gender_female,
  user_role_1,
  user_role_2,
  application_status_accepted,
  application_status_rejected,
  goal_1,
  goal_2,
  goal_3,
  goal_4,
  goal_5,
  goal_6,
  goal_7,
  goal_8,
  goal_9,
  goal_10,
  goal_11,
} = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        unique: true,
      },
      googleId: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.ENUM(user_gender_male, user_gender_female),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM(user_role_1, user_role_2),
        allowNull: false,
        defaultValue: user_role_1,
        validate: {
          notEmpty: true,
        },
      },
      idCardNumber: {
        type: DataTypes.STRING,
        validate: {
          is: /(?=.*?[0-9]).{13}/,
        },
      },
      address: {
        type: DataTypes.STRING,
      },
      healthCoin: {
        type: DataTypes.INTEGER,
      },
      application_status: {
        type: DataTypes.ENUM(
          application_status_accepted,
          application_status_rejected
        ),
      },
      goals: {
        type: DataTypes.ENUM(
          goal_1,
          goal_2,
          goal_3,
          goal_4,
          goal_5,
          goal_6,
          goal_7,
          goal_8,
          goal_9,
          goal_10,
          goal_11
        ),
      },
    },
    { underscored: true }
  );
  User.associate = (db) => {
    User.hasMany(db.History, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Session, {
      as: 'customerId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    User.hasMany(db.Session, {
      as: 'specialistId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    User.hasMany(db.SpecialistVideo, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    User.hasMany(db.Chat, {
      as: 'senderId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    User.hasMany(db.Chat, {
      as: 'receiverId',
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
  };
  return User;
};
