const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);


// Categoria  Categoria a la que pertenece el equipo
// Grupo    Grupo de equipos al que pertence dentro de la division
// Equipo       Nombre del equipo


var TeamScheme = new mongoose.Schema(

   

    {
        id: {
            type: Int32,
            unique:true
        },
        Categoria: {
            type: String
            
        },
        Grupo: {
            type: String
        },
        Equipo: {
            type: String
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model( 'equipos' ,TeamScheme)