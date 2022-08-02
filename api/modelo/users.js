const mongoose = require ('mongoose');



var UsersScheme = new mongoose.Schema(

    {
        correo: {
            type: String,
            unique: true
        },
        usuario: {
            type: String
        },
        pass: {
            type: String
        },
        tipo: {
            type: String
        },
        equipo: {
            type: String
        }
    }
)

module.exports = mongoose.model( 'usuario' ,UsersScheme)