var modelo = require('../modelo/users')

const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");



exports.getData = (req, res) => {
    
    modelo.find({}, (err,docs) => {
        res.send({
            docs
        })
    })
}

exports.getDatauser = (req, res) => {
    
    modelo.find({}, (err,docs) => {
        res.send({
            docs
        })
    })
}

exports.insertData = (req, res) => {
    const data = req.body
    // res.send({data})

    // res.send({ data })
    modelo.create(data, (err,docs) => {
        if(err){
            console.log('Error',err)
            // res.send({ error: 'eror'} , 422)sss
        }else
        res.send({data : docs})
    })
}

exports.updateSingle = (req, res) => {
    const {correo} = req.params
    const body = req.body
    modelo.updateOne(
        {correo: req.params.correo},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}

exports.deleteSingle = (req, res) => {
    const {correo} = req.params
    const body = req.body
    modelo.deleteOne(
        {correo: req.params.correo},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}


exports.registerCtrl = async (req, res) => {
    try{
      req = matchedData(req);
      const pass = await encrypt(req.pass);
      const body = { ...req, pass };
      const dataUser = await modelo.create(body);
      dataUser.set("pass", undefined, { strict: false });
    
      const data = {
        token: await tokenSign(dataUser),
        user: dataUser,
      };
      res.status(201)
      res.send({ data });
    }catch(e){
      console.log(e)
      handleHttpError(res, "ERROR_REGISTER_USER")
    }
  };

  exports.loginCtrl = async (req, res) => {
    try{
      req = matchedData(req);
      const user = await modelo.findOne({email:req.email})
  
      if(!user){
        handleHttpError(res, "USER_NOT_EXISTS", 404);
        return
      }
  
      const hashPassword = user.get('pass');
  
      const check = await compare(req.pass, hashPassword)
  
      if(!check){
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return
      }
  
      user.set('pass', undefined, {strict:false})
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