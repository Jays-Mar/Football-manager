var express = require('express');
var router = express.Router();
const controller = require('../controllers/partidos');

router.get('/partidos',
    controller.getData
)

router.post('/partidos',
    controller.insertData
)

router.put('/:Npartido',
    controller.updateSingle
)

router.delete('/:Npartido',
    controller.deleteSingle
)


module.exports = router

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });
