// const { sequelize } = require('./models');
// // sequelize.drop()
// sequelize.sync({ force: true });

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const http = require('http');
const specialistRoute = require('./routes/specialistRoute');
const authenticate = require('./middlewares/authenticate');
const videoRoute = require('./routes/videoRoute');
const sessionRoute = require('./routes/sessionRoute');
const chatRoute = require('./routes/chatRoute');
const historyRoute = require('./routes/historyRoute');
const packageRoute = require('./routes/packageRoute');
const sessionVideoRoute = require('./routes/sessionVideoRoute');
const specialistExpertiseRoute = require('./routes/specialistExpertiseRoute');
const expertisesRoute = require('./routes/expertisesRoute');

const app = express();
const server = http.createServer(app);

if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/user', authenticate, userRoute);
app.use('/specialist', authenticate, specialistRoute);
app.use('/video', authenticate, videoRoute);
app.use('/session', authenticate, sessionRoute);
app.use('/history', authenticate, historyRoute);
app.use('/package', authenticate, packageRoute);
app.use('/chat', authenticate, chatRoute);
app.use('/sessionvideo', authenticate, sessionVideoRoute);
app.use('/specialistexpertise', authenticate, specialistExpertiseRoute);
app.use('/expertises', authenticate, expertisesRoute);

app.use(notFound);
app.use(error);

module.exports = server;

// app.listen(port, () => console.log(`server is running on port : ${port}`));
