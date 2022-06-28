
//const modelo = require ('../modelo/jugadores')

exports.getData = (req, res) => {
    res.send({data: 'viene de jugadores'})
    // modelo.find({}, (err,docs) => {
    //     res.send({
    //         docs
    //     })
    // })
}