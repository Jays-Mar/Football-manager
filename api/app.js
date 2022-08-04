const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const loginCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email})

    if(!user){
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return
    }

    const hashPassword = user.get('password');

    const check = await compare(req.password, hashPassword)

    if(!check){
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return
    }

    user.set('password', undefined, {strict:false})
    const data = {
      token: await tokenSign(user),
      user
    }

    res.send({data})


  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_LOGIN_USER")
  }
}
const bodyParser = require('body-parser');
const passport = require('passport');
const passportlocal = require('passport-local').Strategy;


const cors = require('cors');

const config = require('./dbase/config');

const initdb = require('./dbase/Database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jugadoresRouter = require('./routes/jugadores');
var equiposRouter = require('./routes/equipos');
var partidosRouter = require('./routes/partidos');
var datosTempRouter = require('./routes/datosTemp');
// var logingRouter = require('./routes/autenticar');

//Rutas personales
const userRouter = require ('./routes/users')
const jugadorRouter = require ('./routes/jugadores')
const EquipoRouter = require ('./routes/equipos')
const PartidosRouter = require('./routes/partidos')
const DatosTempRouter = require('./routes/datosTemp')
// var LoginRouter = require('./routes/autenticar')


var app = express();

initdb()
var session = require('express-session')
app.use(cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));
app.use(passport.initialize());
app.use(passport.session());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/jugador', jugadoresRouter);
app.use('/equipos',equiposRouter);
app.use('/partidos',partidosRouter);
app.use('/datosTemp',datosTempRouter);
app.use(userRouter);
app.use(jugadorRouter);
app.use(EquipoRouter);
app.use(PartidosRouter);
app.use(DatosTempRouter)

module.exports = app;
