const { History, Package, User } = require('../models');
const appError = require('../utils/appError');

exports.updateHistory = async (req, res, next) => {
  try {
    const data = { userId: req.user.id };
    const { payment, currentPrice } = req.body;
    const packageId = req.params.id;
    const package = await Package.findOne({ where: { id: packageId } });
    if (!package) {
      throw new appError('Package invalid', 400);
    }
    if (+currentPrice !== +package.price) {
      throw new appError('Incorrect package price', 400);
    }
    if (!payment) {
      throw new appError('payment method is required', 400);
    }
    // ต้องเช็คว่า user ซื้อ package ไปแล้วหรือไม่ ถ้าต้องเช็ต ต้องเช็ค package หมดอายุหรือยังด้วย
    const history = await History.findOne({
      where: { userId: data.userId },
      include: { model: Package },
      order: [['createdAt', 'DESC']],
    });
    // console.log(history?.createdAt);
    // console.log(Date.now() - history?.createdAt);
    // console.log(history?.Package.duration * 24 * 60 * 60 * 1000);
    if (
      history &&
      Date.now() - history?.createdAt <
        history?.Package.duration * 24 * 60 * 60 * 1000
    ) {
      throw new appError('You already bought package', 400);
    }

    data.payment = payment.toLowerCase().trim();
    data.currentPrice = currentPrice;
    data.packageId = packageId;
    // data.userId = req.user.id
    console.log(data);
    const createdHistory = await History.create(data);

    let healthCoin;
    if (package.name.toLowerCase().startsWith('advance')) {
      healthCoin = 3;
    } else if (package.name.toLowerCase().startsWith('intermediate')) {
      healthCoin = 2;
    } else {
      healthCoin = 1;
    }
    await User.update({ healthCoin }, { where: { id: req.user.id } });
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: {
        exclude: [
          'password',
          'goals',
          'googleId',
          'createdAt',
          'updatedAt',
          'area',
          'idCardNumber',
          'application_status',
          'years_of_experience',
          'description',
          'address',
        ],
      },
    });
    res.status(201).json({ message: 'Recorded history', user });
  } catch (err) {
    next(err);
  }
};
