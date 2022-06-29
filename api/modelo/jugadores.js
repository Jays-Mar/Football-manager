const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);




var PlayerScheme = new mongoose.Schema(

    {
        id: {
            type: Int32,
            unique:true
        },
        nombre: {
            type: String,
            minLength: 3
        },
        apellido: {
            type: String,
            minLength: 3
        },
        numero: {
            type:  Int32
        },
        goles: {
            type: Int32
        },
        division: {
            type: Int32
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model( 'jugadores' ,PlayerScheme)
