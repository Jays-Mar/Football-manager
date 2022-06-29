const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

const initdb = require('./dbase/Database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jugadoresRouter = require('./routes/jugadores');


//Rutas personales
const userRouter = require ('./routes/users')
const jugadorRouter = require ('./routes/jugadores')


var app = express();

initdb()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jugador', jugadoresRouter);
app.use(userRouter);
app.use(jugadorRouter);

module.exports = app;
