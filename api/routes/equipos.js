var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

router.get('/equipos',
    controller.getData
)

router.post('/equipos',
    controller.insertData
)

router.put('/:id',
            controller.updateSingle
)


module.exports = router

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });
