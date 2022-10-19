// const { sequelize } = require('./models');
// sequelize.sync({ alter: true });

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const specialistRoute = require('./routes/specialistRoute');

const app = express();

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
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port : ${port}`));
