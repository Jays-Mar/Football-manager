var express = require('express');
var router = express.Router();
const controller = require('../controllers/datosTempo');

router.get('/',
    controller.getData
)

router.post('/',
    controller.insertData
)

router.put('/:id',
            controller.updateSingle
)

router.delete('/:id',
            controller.deleteSingle
)


module.exports = router
