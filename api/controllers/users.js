var modelo = require('../modelo/users')

exports.getData = (req, res) => {
    res.send({data: 'viene de rutas'})
    // modelo.find({}, (err,docs) => {
    //     res.send({
    //         docs
    //     })
    // })
}