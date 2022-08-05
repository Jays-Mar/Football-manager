var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');
const {loginCtrl, registerCtrl} = require("../controllers/users");
const { validatorRegister, validatorLogin } = require("../modelo/validator");


router.get('/',
    controller.getData
)

router.get('/',
    controller.getDatauser
)



router.post('/',
    controller.insertData
)

router.put('/:correo',
    controller.updateSingle
)

router.delete('/:correo',
    controller.deleteSingle
)

router.post("/register", validatorRegister, registerCtrl)

router.post("/login", validatorLogin, loginCtrl)

module.exports = router
