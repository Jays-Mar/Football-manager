var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/jugadores',
    controller.getData
)

router.post('/jugadores',
    controller.insertData
)

module.exports = router
