var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

router.get('/jugadores',
    controller.getData
)

router.post('/jugadores',
    controller.insertData
)

router.put('/:id',
            controller.updateSingle
)


module.exports = router
