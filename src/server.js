const server = require('./app');
const { Server } = require('socket.io');
const { instrument } = require('@socket.io/admin-ui');
const chalk = require('chalk');
const onlineUser = {};

const io = new Server(server, {
  cors: {
    origin: ['https://admin.socket.io', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST'],
  },
});
instrument(io, { auth: false });

io.use((socket, next) => {
  const userId = socket.handshake.auth.myId;
  if (!userId) {
    return next(new Error('invalid username'));
  }
  onlineUser[userId] = socket.id;
  console.log(chalk.green(`User online : ${Object.keys(onlineUser).length}`));
  console.log(chalk.red(`User Connected: ${socket.id}`));
  console.log(onlineUser);
  next();
});

io.on('connection', async (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('sendMessage', (newMessage) => {
    console.log(chalk.blue(newMessage.message));
    console.log(onlineUser[newMessage.receiver]);

    socket
      .to(onlineUser[newMessage.receiver])
      .emit('receiveMessage', newMessage);
  });

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`server${port}`));
