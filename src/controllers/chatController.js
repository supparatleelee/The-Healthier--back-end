const { ChatRoom, User, Chat } = require('../models');
const { Op } = require('sequelize');

exports.getChat = async (req, res, next) => {
  const specialist = req.params.id;
  const user = req.user.id;
  const userData = await User.findOne({ where: { id: user } });
  const userData2 = await User.findOne({ where: { id: req.params.id } });
  const chat = await ChatRoom.findOne({
    where: {
      [Op.or]: [
        { user1Id: specialist, user2Id: user },
        { user1Id: user, user2Id: specialist },
      ],
    },
    include: Chat,
  });
  const getRoom = await ChatRoom.findAll({
    where: { user1Id: user },
    include: [{ model: User, as: 'user1' }, { model: User, as: 'user2' }, Chat],
  });
  res.status(200).json({
    chat,
    getRoom,
    userName: userData?.firstName,
    secondUserName: userData2?.firstName,
  });
};

exports.getAllRoom = async (req, res, next) => {
  const user = req.user.id;

  const getRooms = await ChatRoom.findAll({
    where: { [Op.or]: [{ user1Id: user }, { user2Id: user }] },
    include: [
      { model: User, as: 'user1' },
      { model: User, as: 'user2' },
    ],
  });

  res.status(200).json(getRooms);
};

exports.newMessage = async (req, res, next) => {
  try {
    const { message, sender, chatRoomId } = req.body;
    const newMessage = await Chat.create({ message, sender, chatRoomId });
    res.status(201).json({ newMessage });
  } catch (err) {
    console.log(err);
  }
};

exports.createRoom = async (req, res, next) => {
  try {
    const user2Id = +req.body.id;
    const user1Id = req.user.id;
    const doubleCheck = await ChatRoom.findOne({
      where: {
        [Op.or]: [
          {
            user1Id: user1Id,
            user2Id: user2Id,
          },
          {
            user1Id: user2Id,
            user2Id: user1Id,
          },
        ],
      },
    });
    if (!doubleCheck) {
      const newChatRoom = await ChatRoom.create({
        user2Id: user2Id,
        user1Id: user1Id,
      });
      res.status(200).json({ message: 'room successfully created' });
    } else {
      res.status(200).json({ doubleCheck });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
