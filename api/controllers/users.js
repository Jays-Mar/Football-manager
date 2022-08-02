var modelo = require('../modelo/users')

exports.getData = (req, res) => {
    
    modelo.find({}, (err,docs) => {
        res.send({
            docs
        })
    })
}