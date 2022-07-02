const mongoose = require ('mongoose');



var UsersScheme = new mongoose.Schema(

    {
        nombre: {
            type: String,
            unique: true
        },
        contraseña: {
            type: String
        },
        tipo: {
            type: String
        }
    }
)

module.exports = mongoose.model( 'users' ,UsersScheme)