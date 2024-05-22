const express = require('express');
const cors = require('cors');
// const { sequelize } = require('./models');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errroMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use(errorMiddleware);

module.exports = app;
