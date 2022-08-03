var express = require('express');
var router = express.Router();
const controller = require('../controllers/datosTemp');

router.get('/',
    controller.getData
)

router.post('/',
    controller.insertData
)

router.put('/',
            controller.updateSingle
)

router.delete('/',
            controller.deleteSingle
)


module.exports = router

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });
