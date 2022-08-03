var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

router.get('/',
    controller.getData
)

router.get('/jugadores2',
    controller.getDatav2
)

router.post('/',
    controller.insertData
)

router.put('/:NequiNjugador',
            controller.updateSingle
)

router.delete('/:NequiNjugador')


module.exports = router

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });
