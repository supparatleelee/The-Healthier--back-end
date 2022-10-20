const server = require('./app');
const { Server } = require('socket.io');
const { instrument } = require('@socket.io/admin-ui');

const io = new Server(server, {
  cors: {
    origin: ['https://admin.socket.io', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST'],
  },
});
instrument(io, { auth: false });

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

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
