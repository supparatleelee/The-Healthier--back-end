const { History, Package, User } = require('../models');
const appError = require('../utils/appError');

const omise = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

exports.createPayment = async (req, res, next) => {
  const { payment, currentPrice, token, packageId } = req.body;

  try {
    if (!token) {
      throw new appError('Payment not success', 400);
    }
    const customer = await omise.customers.create({
      card: token,
    });

    const charge = await omise.charges.create({
      amount: currentPrice,
      currency: 'thb',
      customer: customer.id,
    });

    const data = { userId: req.user.id };
    const package = await Package.findOne({ where: { id: packageId } });
    if (!package) {
      throw new appError('Package invalid', 400);
    }

    if (currentPrice / 100 !== package.price) {
      throw new appError('Incorrect package price', 400);
    }
    if (!payment) {
      throw new appError('payment method is required', 400);
    }

    const history = await History.findOne({
      where: { userId: data.userId },
      include: { model: Package },
      order: [['createdAt', 'DESC']],
    });

    if (
      history &&
      Date.now() - history?.createdAt.valueOf() <
        history?.Package.duration * 24 * 60 * 60 * 1000
    ) {
      throw new appError('You already bought package', 400);
    }

    data.payment = payment.toLowerCase().trim();
    data.currentPrice = currentPrice / 100;
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
    return res.status(201).json({ message: 'Recorded history', user });

    next();
  } catch (err) {
    next(err);
  }
};
