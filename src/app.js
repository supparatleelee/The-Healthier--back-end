// const { sequelize } = require('./models');
// sequelize.sync();

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

const app = express();
const server = http.createServer(app);

if ((process.env.NODE_ENV = 'development')) {
  app.use(morgan('dev'));
}

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/specialist', specialistRoute);
app.use(notFound);
app.use(error);

module.exports = server;

// app.listen(port, () => console.log(`server is running on port : ${port}`));
