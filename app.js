const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/index'));

module.exports = app;
