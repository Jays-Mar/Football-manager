var express = require('express');
var router = express.Router();
const controller = require('../dbase/passport')

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',
    controller.getData
)

router.post('/',
    controller.insertData
)



module.exports = router
