var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

router.get('/jugadores',
    controller.getData
)

router.get('/jugadores2',
    controller.getDatav2
)

router.post('/jugadores',
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
