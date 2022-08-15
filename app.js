var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()

const routerTribunaux = require('./routes/Tirbunaux.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://skander:skander@cluster0.473cs.mongodb.net/Tribunaux?retryWrites=true&w=majority")
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log(err.message))

app.use('/api', routerTribunaux)

module.exports = app;
