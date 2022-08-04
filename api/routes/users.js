var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')


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

router.post('/login',
controller.loginCtrl
)

router.post('/register',
controller.registerCtrl
)

module.exports = router
