const AppError = require('../utils/appError');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');

// const client = new OAuth2Client(process.env.CLIENTID);
const genToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY || 'private_key', {
    expiresIn: process.env.JWT_EXPIRES || '1d',
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    console.log(email);

    if (!email) {
      throw new AppError('Email is required', 400);
    }
    if (!validator.isEmail(email)) {
      throw new AppError("Wrong email's format", 400);
    }
    if (!firstName) {
      throw new AppError('Firstname is required', 400);
    }
    if (!lastName) {
      throw new AppError('Lastname is required', 400);
    }
    if (!validator.equals(password, confirmPassword)) {
      throw new AppError('password and confirm password is not match', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const token = genToken({ id: user.id });

    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new AppError('invalid input', 400);
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new AppError('User with this email does not exist', 400);
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      throw new AppError('Invalid, Please try again', 400);
    }
    const token = genToken({ id: user.id });
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};

exports.googleLogin = async (req, res, next) => {
  try {
    const { tokenId } = req.body;
    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.CLIENTID,
    });
    const { email_verified, given_name, family_name, email } = response.payload;
    if (email_verified) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        const token = genToken({ id: user.id });
        res.status(200).json({ token });
      } else {
        let randomPassword = family_name + email + given_name;
        const hashedPassword = await bcrypt.hash(randomPassword, 12);
        const newUser = {
          firstName: given_name,
          lastName: family_name,
          email: email,
          password: hashedPassword,
        };
        const user = await User.create(newUser);
        const token = genToken({ id: user.id });
        res.status(201).json({ token });
      }
    }
  } catch (err) {
    next(err);
  }
};
