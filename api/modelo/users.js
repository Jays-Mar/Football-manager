const mongoose = require ('mongoose');



var UsersScheme = new mongoose.Schema(

    {
        name: {
            type: String,
            unique: true
        },
        pass: {
            type: String
        },
        tipo: {
            type: String
        }
    }
)

module.exports = mongoose.model( 'users' ,UsersScheme)