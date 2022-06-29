var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/users',
    controller.getData
)

module.exports = router
