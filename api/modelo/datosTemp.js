const { Timestamp } = require('mongodb');
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
        Jornada: {
            type: String
        },
        Grupo: {
            type: String
        },
        PartidaJornada: {
            type: Int32
        },
        GEquipo1: {
            type: String
        },
        GEquipo2: {
            type: String
        },
        Equipo1: {
            type: String
        },
        Equipo2: {
            type: String
        },
        Campo: {
            type: String
        },
        Fecha: {
            type: Date
        },
        hora: {
            type: Timestamp
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model( 'equipos' ,TeamScheme)